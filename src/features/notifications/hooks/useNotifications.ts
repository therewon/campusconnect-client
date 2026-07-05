import { useMutation, useQuery } from "@tanstack/react-query";
import { notificationService } from "../services/notificationService";

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