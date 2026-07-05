import { useMutation, useQuery } from "@tanstack/react-query";
import { messageService } from "../services/messageService";

export const useConversations = () =>
  useQuery({
    queryKey: ["conversations"],
    queryFn: messageService.getConversations,
  });

export const useMessages = (userId: string) =>
  useQuery({
    queryKey: ["messages", userId],
    queryFn: () => messageService.getMessages(userId),
    enabled: !!userId,
  });

export const useSendMessage = () =>
  useMutation({
    mutationFn: ({
      receiverId,
      content,
    }: {
      receiverId: string;
      content: string;
    }) => messageService.sendMessage(receiverId, content),
  });