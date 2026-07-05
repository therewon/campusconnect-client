import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { teamFinderService } from "../services/teamFinderService";
import type { ApplyTeamFinderDto } from "../types/teamFinder.types";

// 1. Получение всех постов
export function useTeamFinder() {
  return useQuery({
    queryKey: ["teamFinders"],
    queryFn: teamFinderService.getAll,
  });
}

export const useTeamFinders = useTeamFinder;

// 2. Создание поста
export function useCreateTeamFinder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: teamFinderService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["teamFinders"] });
    },
  });
}

// 3. Получение поста по ID
export function useTeamFinderById(id: number) {
  return useQuery({
    queryKey: ["teamFinder", id],
    queryFn: () => teamFinderService.getById(id),
    enabled: !isNaN(id) && id > 0,
  });
}

// 4. Отклик на пост
export function useApplyTeamFinder(id: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: ApplyTeamFinderDto) => teamFinderService.apply(id, dto),
    onSuccess: () => {
      // Обновляем детали поста, чтобы инкрементировать счетчик заявок
      queryClient.invalidateQueries({ queryKey: ["teamFinder", id] });
    },
  });
}