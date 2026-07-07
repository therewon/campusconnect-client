import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
    refetchOnWindowFocus: false,
  });

export const useSendMessage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      receiverId,
      content,
    }: {
      receiverId: string;
      content: string;
    }) => messageService.sendMessage(receiverId, content),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["messages", variables.receiverId],
      });

      queryClient.invalidateQueries({
        queryKey: ["conversations"],
      });
    },
  });
};