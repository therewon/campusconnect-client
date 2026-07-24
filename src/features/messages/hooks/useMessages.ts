import { useEffect, useState } from "react";
import {
  ensureFirebaseSession,
  subscribeToConversations,
  subscribeToMessages,
} from "../services/messageService";
import type { ChatMessage, Conversation } from "../types/message.types";

export function useFirebaseSession() {
  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    ensureFirebaseSession()
      .then((user) => setUserId(user.uid))
      .catch((reason: unknown) =>
        setError(
          reason instanceof Error
            ? reason.message
            : "Firebase bağlantısı qurulmadı.",
        ),
      );
  }, []);

  return { userId, isLoading: !userId && !error, error };
}

export function useConversations(userId: string) {
  const [data, setData] = useState<Conversation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!userId) return;
    return subscribeToConversations(
      userId,
      (items) => {
        setData(items);
        setIsLoading(false);
      },
      (reason) => {
        setError(reason.message);
        setIsLoading(false);
      },
    );
  }, [userId]);

  return { data, isLoading, error };
}

export function useMessages(chatId: string | null) {
  const [data, setData] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!chatId) return;
    return subscribeToMessages(
      chatId,
      (items) => {
        setData(items);
        setIsLoading(false);
      },
      (reason) => {
        setError(reason.message);
        setIsLoading(false);
      },
    );
  }, [chatId]);

  return { data, isLoading, error };
}
