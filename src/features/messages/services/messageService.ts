import { axiosInstance } from "../../../api/axiosInstance";

export const messageService = {
  sendMessage: async (receiverId: string, content: string) => {
    const { data } = await axiosInstance.post("/Messages", {
      receiverId,
      content,
    });

    return data;
  },

  getMessages: async (otherUserId: string) => {
    const { data } = await axiosInstance.get(`/Messages/${otherUserId}`);

    return data;
  },

  getConversations: async () => {
    const { data } = await axiosInstance.get("/Messages/conversations");

    return data;
  },
};