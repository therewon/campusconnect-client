import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { adminService } from "../services/adminService";

export function useAdminUsers() {
  return useQuery({
    queryKey: ["admin-users"],
    queryFn: adminService.getUsers,
  });
}

export function useBanUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: adminService.banUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-users"],
      });
    },
  });
}

export function useUnbanUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: adminService.unbanUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-users"],
      });
    },
  });
}