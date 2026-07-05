import { axiosInstance } from "../../../api/axiosInstance";
import { ENDPOINTS } from "../../../api/endpoints";

export const adminService = {
  // Users
 async getUsers() {
  const response = await axiosInstance.get(
    ENDPOINTS.ADMIN.GET_USERS
  );

  console.log(response.data);

  return response.data;
},
async banUser(id: string) {
  const response = await axiosInstance.patch(
    ENDPOINTS.ADMIN.BAN_USER(id),
    {
      reason: "Admin tərəfindən ban edildi"
    }
  );

  return response.data;
},

  async unbanUser(id: string) {
    const response = await axiosInstance.patch(
      ENDPOINTS.ADMIN.UNBAN_USER(id)
    );

    return response.data;
  },

  // Dashboard Stats
  async getStats() {
    const response = await axiosInstance.get(
      ENDPOINTS.ADMIN.GET_STATS
    );

    return response.data;
  },

  // Announcements
  async approveAnnouncement(id: number) {
    const response = await axiosInstance.patch(
      ENDPOINTS.ADMIN.APPROVE_ANNOUNCEMENT(id)
    );

    return response.data;
  },

  async rejectAnnouncement(id: number) {
    const response = await axiosInstance.patch(
      ENDPOINTS.ADMIN.REJECT_ANNOUNCEMENT(id)
    );

    return response.data;
  },
};