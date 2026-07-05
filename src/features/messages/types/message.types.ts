export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  createdAt: string;
}

export interface Conversation {
  userId: string;
  fullName: string;
  lastMessage: string;
  lastMessageTime: string;
}