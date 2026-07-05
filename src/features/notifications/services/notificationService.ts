import { axiosInstance } from "../../../api/axiosInstance";

export const notificationService = {
  getAll: async () => {
    const { data } = await axiosInstance.get("/notifications");
    return data;
  },

  unreadCount: async () => {
    const { data } = await axiosInstance.get("/notifications/unread-count");
    return data;
  },

  markRead: async (id: string) => {
    const { data } = await axiosInstance.patch(`/notifications/${id}/read`);
    return data;
  },

  markAllRead: async () => {
    const { data } = await axiosInstance.patch("/notifications/read-all");
    return data;
  },
};