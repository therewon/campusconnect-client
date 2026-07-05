import { useQuery } from "@tanstack/react-query";
import { adminService } from "../services/adminService";

export function useAdminStats() {
  return useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const { data } = await adminService.getStats();
      return data;
    },
  });
}