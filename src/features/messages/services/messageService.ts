import {
  signInAnonymously,
  signInWithCustomToken,
  type UserCredential,
} from "firebase/auth";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  where,
  writeBatch,
  type Unsubscribe,
} from "firebase/firestore";
import { axiosInstance } from "../../../api/axiosInstance";
import { firebaseAuth, firestore } from "../../../lib/firebase";
import type { ChatMessage, Conversation } from "../types/message.types";

let sessionPromise: Promise<UserCredential> | null = null;

function conversationId(firstUserId: string, secondUserId: string) {
  return [firstUserId, secondUserId].sort().join("_");
}

export async function ensureFirebaseSession() {
  if (firebaseAuth.currentUser) return firebaseAuth.currentUser;
  if (sessionPromise) return (await sessionPromise).user;

  if (import.meta.env.VITE_FIREBASE_AUTH_MODE === "custom") {
    const endpoint =
      import.meta.env.VITE_FIREBASE_TOKEN_ENDPOINT || "/Auth/firebase-token";
    const { data } = await axiosInstance.post(endpoint);
    const token = data?.token ?? data?.firebaseToken ?? data?.customToken;

    if (!token) {
      throw new Error("Backend Firebase custom token qaytarmadı.");
    }
    sessionPromise = signInWithCustomToken(firebaseAuth, token);
  } else {
    sessionPromise = signInAnonymously(firebaseAuth);
  }

  try {
    return (await sessionPromise).user;
  } catch (error) {
    sessionPromise = null;
    throw error;
  }
}

export function subscribeToConversations(
  userId: string,
  onData: (items: Conversation[]) => void,
  onError: (error: Error) => void,
): Unsubscribe {
  const conversationsQuery = query(
    collection(firestore, "conversations"),
    where("participantIds", "array-contains", userId),
  );

  return onSnapshot(
    conversationsQuery,
    (snapshot) => {
      const conversations = snapshot.docs.map((item) => ({
          id: item.id,
          ...(item.data() as Omit<Conversation, "id">),
        }));
      conversations.sort(
        (first, second) =>
          (second.lastMessageAt?.toMillis() ?? 0) -
          (first.lastMessageAt?.toMillis() ?? 0),
      );
      onData(conversations);
    },
    onError,
  );
}

export function subscribeToMessages(
  chatId: string,
  onData: (items: ChatMessage[]) => void,
  onError: (error: Error) => void,
): Unsubscribe {
  const messagesQuery = query(
    collection(firestore, "conversations", chatId, "messages"),
    orderBy("createdAt", "asc"),
  );

  return onSnapshot(
    messagesQuery,
    (snapshot) => {
      onData(
        snapshot.docs.map((item) => ({
          id: item.id,
          ...(item.data() as Omit<ChatMessage, "id">),
        })),
      );
    },
    onError,
  );
}

export async function sendFirebaseMessage(input: {
  senderId: string;
  senderName: string;
  receiverId: string;
  receiverName: string;
  content: string;
}) {
  const user = await ensureFirebaseSession();
  if (user.uid !== input.senderId) {
    throw new Error("Firebase istifadəçi ID-si backend istifadəçi ID-si ilə uyğun deyil.");
  }

  const content = input.content.trim();
  if (!content) return;

  const id = conversationId(input.senderId, input.receiverId);
  const conversationRef = doc(firestore, "conversations", id);
  const messageRef = doc(
    collection(firestore, "conversations", id, "messages"),
  );
  const batch = writeBatch(firestore);

  batch.set(
    conversationRef,
    {
      participantIds: [input.senderId, input.receiverId],
      participantNames: {
        [input.senderId]: input.senderName,
        [input.receiverId]: input.receiverName,
      },
      lastMessage: content,
      lastMessageAt: serverTimestamp(),
      lastSenderId: input.senderId,
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );
  batch.set(messageRef, {
    senderId: input.senderId,
    receiverId: input.receiverId,
    content,
    createdAt: serverTimestamp(),
  });

  await batch.commit();
}

export async function createConversation(input: {
  currentUserId: string;
  currentUserName: string;
  otherUserId: string;
  otherUserName: string;
}) {
  const user = await ensureFirebaseSession();
  if (user.uid !== input.currentUserId) {
    throw new Error("Firebase istifadəçi ID-si backend istifadəçi ID-si ilə uyğun deyil.");
  }

  const id = conversationId(input.currentUserId, input.otherUserId);
  await setDoc(
    doc(firestore, "conversations", id),
    {
      participantIds: [input.currentUserId, input.otherUserId],
      participantNames: {
        [input.currentUserId]: input.currentUserName,
        [input.otherUserId]: input.otherUserName,
      },
      lastMessage: "",
      lastMessageAt: serverTimestamp(),
      lastSenderId: "",
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );
  return id;
}
