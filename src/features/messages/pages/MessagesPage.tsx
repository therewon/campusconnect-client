import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import {
  useConversations,
  useFirebaseSession,
  useMessages,
} from "../hooks/useMessages";
import {
  createConversation,
  sendFirebaseMessage,
} from "../services/messageService";
import type { Conversation } from "../types/message.types";

function formatTime(value: Conversation["lastMessageAt"]) {
  if (!value) return "";
  return value.toDate().toLocaleTimeString("az-AZ", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function MessagesPage() {
  const [searchParams] = useSearchParams();
  const firebaseSession = useFirebaseSession();
  const currentUserId = firebaseSession.userId;
  const currentUserName = useMemo(
    () =>
      localStorage.getItem("campusconnect_guest_name") ||
      `Qonaq ${currentUserId.slice(0, 6)}`,
    [currentUserId],
  );
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const [actionError, setActionError] = useState("");
  const [showNewChat, setShowNewChat] = useState(false);
  const [recipientId, setRecipientId] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const streamEndRef = useRef<HTMLDivElement>(null);
  const creatingForRef = useRef("");
  const conversationsState = useConversations(currentUserId);
  const requestedRecipientId = searchParams.get("recipientId") ?? "";
  const requestedConversation = conversationsState.data.find((item) =>
    item.participantIds.includes(requestedRecipientId),
  );
  const activeChatId =
    selectedChatId ??
    requestedConversation?.id ??
    conversationsState.data[0]?.id ??
    null;
  const messagesState = useMessages(activeChatId);

  const selectedConversation = useMemo(
    () =>
      conversationsState.data.find((item) => item.id === activeChatId) ??
      null,
    [activeChatId, conversationsState.data],
  );

  const otherUserId =
    selectedConversation?.participantIds.find((id) => id !== currentUserId) ??
    "";
  const otherUserName =
    selectedConversation?.participantNames?.[otherUserId] ?? "İstifadəçi";

  useEffect(() => {
    const recipientId = requestedRecipientId;
    const recipientName = searchParams.get("recipientName") || "İstifadəçi";
    if (!recipientId || !currentUserId) return;

    const existing = conversationsState.data.find((item) =>
      item.participantIds.includes(recipientId),
    );
    if (existing || creatingForRef.current === recipientId) return;
    creatingForRef.current = recipientId;

    createConversation({
      currentUserId,
      currentUserName,
      otherUserId: recipientId,
      otherUserName: recipientName,
    })
      .then(setSelectedChatId)
      .catch((reason: unknown) => {
        creatingForRef.current = "";
        setActionError(
          reason instanceof Error ? reason.message : "Söhbət yaradıla bilmədi.",
        );
      });
  }, [
    conversationsState.data,
    currentUserId,
    currentUserName,
    requestedRecipientId,
    searchParams,
  ]);

  useEffect(() => {
    streamEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messagesState.data]);

  async function handleSend(event: FormEvent) {
    event.preventDefault();
    if (!draft.trim() || !otherUserId || sending) return;

    setSending(true);
    setActionError("");
    try {
      await sendFirebaseMessage({
        senderId: currentUserId,
        senderName: currentUserName,
        receiverId: otherUserId,
        receiverName: otherUserName,
        content: draft,
      });
      setDraft("");
    } catch (reason) {
      setActionError(
        reason instanceof Error ? reason.message : "Mesaj göndərilə bilmədi.",
      );
    } finally {
      setSending(false);
    }
  }

  async function handleCreateChat(event: FormEvent) {
    event.preventDefault();
    const cleanRecipientId = recipientId.trim();
    if (!cleanRecipientId || cleanRecipientId === currentUserId) return;

    setSending(true);
    setActionError("");
    try {
      const chatId = await createConversation({
        currentUserId,
        currentUserName,
        otherUserId: cleanRecipientId,
        otherUserName: recipientName.trim() || "İstifadəçi",
      });
      setSelectedChatId(chatId);
      setRecipientId("");
      setRecipientName("");
      setShowNewChat(false);
    } catch (reason) {
      setActionError(
        reason instanceof Error ? reason.message : "Söhbət yaradıla bilmədi.",
      );
    } finally {
      setSending(false);
    }
  }

  if (firebaseSession.isLoading) {
    return (
      <div className="empty-chat">
        Firebase bağlantısı qurulur...
      </div>
    );
  }

  if (firebaseSession.error) {
    return (
      <div className="empty-chat px-xl text-center">
        <span className="material-symbols-outlined text-5xl mb-md">error</span>
        <p>Firebase bağlantısı qurulmadı.</p>
        <p className="text-sm mt-sm text-error">{firebaseSession.error}</p>
        <p className="text-sm mt-md">
          Firebase Console-da Authentication → Sign-in method → Anonymous
          provider-ini aktiv edin.
        </p>
      </div>
    );
  }

  return (
    <main className="flex-1 flex flex-col h-screen overflow-hidden">
      <div className="flex-1 flex overflow-hidden">
        <section
          className={`${activeChatId ? "hidden md:flex" : "flex"} w-full md:w-80 lg:w-96 border-r border-outline-variant bg-surface flex-col`}
        >
          <div className="p-md border-b border-outline-variant space-y-md">
            <div className="flex items-center justify-between gap-md">
              <div>
                <h3 className="font-title-md text-title-md font-bold text-on-surface">
                  Mesajlar
                </h3>
                <p className="text-sm text-on-surface-variant mt-1">
                  {currentUserName}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowNewChat((value) => !value)}
                className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center"
                aria-label="Yeni söhbət"
              >
                <span className="material-symbols-outlined">edit_square</span>
              </button>
            </div>
            <div className="rounded-lg bg-surface-container p-sm">
              <p className="text-[10px] uppercase text-on-surface-variant">
                Sizin Firebase ID
              </p>
              <p className="text-xs font-mono break-all select-all">
                {currentUserId}
              </p>
            </div>
            {showNewChat && (
              <form onSubmit={handleCreateChat} className="space-y-sm">
                <input
                  value={recipientId}
                  onChange={(event) => setRecipientId(event.target.value)}
                  className="w-full rounded-lg border border-outline-variant p-sm"
                  placeholder="Qarşı tərəfin Firebase ID-si"
                  required
                />
                <input
                  value={recipientName}
                  onChange={(event) => setRecipientName(event.target.value)}
                  className="w-full rounded-lg border border-outline-variant p-sm"
                  placeholder="Adı (opsional)"
                />
                <button
                  type="submit"
                  disabled={
                    sending ||
                    !recipientId.trim() ||
                    recipientId.trim() === currentUserId
                  }
                  className="w-full rounded-lg bg-primary text-on-primary p-sm disabled:opacity-50"
                >
                  Söhbəti başlat
                </button>
              </form>
            )}
            {actionError && (
              <p className="text-sm text-error">{actionError}</p>
            )}
          </div>

          <div className="flex-1 overflow-y-auto hide-scrollbar">
            {conversationsState.isLoading && (
              <p className="p-md text-on-surface-variant">Yüklənir...</p>
            )}
            {conversationsState.error && (
              <p className="p-md text-error">{conversationsState.error}</p>
            )}
            {!conversationsState.isLoading &&
              !conversationsState.error &&
              conversationsState.data.length === 0 && (
                <div className="p-xl text-center text-on-surface-variant">
                  Hələ söhbətiniz yoxdur.
                </div>
              )}
            {conversationsState.data.map((conversation) => {
              const participantId = conversation.participantIds.find(
                (id) => id !== currentUserId,
              );
              const participantName =
                conversation.participantNames?.[participantId ?? ""] ??
                "İstifadəçi";
              const isActive = conversation.id === activeChatId;

              return (
                <button
                  type="button"
                  key={conversation.id}
                  onClick={() => setSelectedChatId(conversation.id)}
                  className={`w-full text-left p-md flex gap-md transition-all ${
                    isActive
                      ? "bg-surface-container-high border-r-4 border-primary"
                      : "hover:bg-surface-container"
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold shrink-0">
                    {participantName.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-sm">
                      <span className="font-bold text-on-surface truncate">
                        {participantName}
                      </span>
                      <span className="text-[10px] text-on-surface-variant">
                        {formatTime(conversation.lastMessageAt)}
                      </span>
                    </div>
                    <p className="text-sm text-on-surface-variant truncate">
                      {conversation.lastMessage || "Yeni söhbət"}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <section
          className={`${activeChatId ? "flex" : "hidden md:flex"} flex-1 flex-col bg-surface-container-lowest`}
        >
          {!selectedConversation ? (
            <div className="empty-chat">
              <span className="material-symbols-outlined text-5xl mb-md">
                forum
              </span>
              Söhbət seçin
            </div>
          ) : (
            <>
              <div className="px-xl py-md border-b border-outline-variant bg-surface flex items-center gap-md shadow-sm">
                <button
                  type="button"
                  className="md:hidden"
                  onClick={() => setSelectedChatId("")}
                  aria-label="Söhbətlərə qayıt"
                >
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
                  {otherUserName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">{otherUserName}</h4>
                  <p className="text-xs text-secondary">Real-time söhbət</p>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-xl space-y-md bg-[#f9fbff]">
                {messagesState.isLoading && (
                  <p className="text-center text-on-surface-variant">
                    Mesajlar yüklənir...
                  </p>
                )}
                {messagesState.error && (
                  <p className="text-center text-error">{messagesState.error}</p>
                )}
                {messagesState.data.map((message) => {
                  const isMine = message.senderId === currentUserId;
                  return (
                    <div
                      key={message.id}
                      className={`flex ${isMine ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] p-md shadow-sm ${
                          isMine
                            ? "chat-bubble-sent bg-primary text-on-primary"
                            : "chat-bubble-received bg-white border border-outline-variant text-on-surface"
                        }`}
                      >
                        <p className="whitespace-pre-wrap break-words">
                          {message.content}
                        </p>
                        <span
                          className={`block text-[10px] mt-1 opacity-70 ${
                            isMine ? "text-right" : ""
                          }`}
                        >
                          {message.createdAt
                            ? message.createdAt
                                .toDate()
                                .toLocaleTimeString("az-AZ", {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })
                            : "göndərilir..."}
                        </span>
                      </div>
                    </div>
                  );
                })}
                <div ref={streamEndRef} />
              </div>

              <form
                onSubmit={handleSend}
                className="p-xl bg-surface border-t border-outline-variant"
              >
                {(actionError || messagesState.error) && (
                  <p className="text-error text-sm mb-sm">
                    {actionError || messagesState.error}
                  </p>
                )}
                <div className="flex items-end gap-md">
                  <textarea
                    value={draft}
                    onChange={(event) => setDraft(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" && !event.shiftKey) {
                        event.preventDefault();
                        event.currentTarget.form?.requestSubmit();
                      }
                    }}
                    className="flex-1 bg-surface-container rounded-xl border border-outline-variant p-md resize-none max-h-32"
                    placeholder="Mesaj yazın..."
                    rows={1}
                  />
                  <button
                    type="submit"
                    disabled={sending || !draft.trim()}
                    className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-lg disabled:opacity-50"
                    aria-label="Mesajı göndər"
                  >
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </div>
              </form>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
