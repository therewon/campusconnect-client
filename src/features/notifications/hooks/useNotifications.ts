import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { notificationService } from "../services/notificationService";
import signalRService from "../../../lib/signalr/signalr";

export const useRealtimeNotifications = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    signalRService.start();

    signalRService.on("ReceiveNotification", () => {
      queryClient.invalidateQueries({
        queryKey: ["notifications"],
      });

      queryClient.invalidateQueries({
        queryKey: ["notification-count"],
      });
    });

    return () => {
      signalRService.off("ReceiveNotification");
    };
  }, [queryClient]);
};

export const useNotifications = () =>
  useQuery({
    queryKey: ["notifications"],
    queryFn: notificationService.getAll,
  });

export const useUnreadCount = () =>
  useQuery({
    queryKey: ["notification-count"],
    queryFn: notificationService.unreadCount,
  });

export const useMarkRead = () =>
  useMutation({
    mutationFn: notificationService.markRead,
  });

export const useMarkAllRead = () =>
  useMutation({
    mutationFn: notificationService.markAllRead,
  });