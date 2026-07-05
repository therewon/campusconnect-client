import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { adminService } from "../services/adminService";

export function useApproveAnnouncement() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: adminService.approveAnnouncement,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["announcements"],
      });
    },
  });
}

export function useRejectAnnouncement() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: adminService.rejectAnnouncement,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["announcements"],
      });
    },
  });
}

export function useUsers() {
  return useQuery({
    queryKey: ["admin-users"],
    queryFn: adminService.getUsers,
  });
}

export function useStats() {
  return useQuery({
    queryKey: ["admin-stats"],
    queryFn: adminService.getStats,
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