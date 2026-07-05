import { axiosInstance } from "../../../api/axiosInstance";
import type {
  LostFound,
  CreateLostFoundRequest,
  LostFoundStatus,
} from "../types/lostFound.types";

const BASE = "/LostFound";

// C# enum default integer serialization:
// Lost = 0, Found = 1, Resolved = 2
const STATUS_TO_INT: Record<LostFoundStatus, number> = {
  Lost: 0,
  Found: 1,
  Resolved: 2,
};

export const lostFoundService = {
  getAll: async (): Promise<LostFound[]> => {
    const response = await axiosInstance.get(BASE);
    const raw = response.data;
    if (Array.isArray(raw)) return raw;
    if (Array.isArray(raw?.data)) return raw.data;
    return [];
  },

  create: async (data: CreateLostFoundRequest): Promise<any> => {
    // Send Status as integer because C# enum is serialized as int by default
    const payload = {
      title: data.title,
      description: data.description,
      contact: data.contact,
      status: STATUS_TO_INT[data.status],
    };
    const response = await axiosInstance.post(BASE, payload);
    return response.data;
  },

  updateStatus: async (id: number, status: LostFoundStatus): Promise<any> => {
    // Send status as integer for the same reason
    const response = await axiosInstance.put(`${BASE}/${id}/status`, {
      status: STATUS_TO_INT[status],
    });
    return response.data;
  },

  delete: async (id: number): Promise<any> => {
    const response = await axiosInstance.delete(`${BASE}/${id}`);
    return response.data;
  },
};
