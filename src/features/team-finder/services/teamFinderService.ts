import { axiosInstance } from "../../../api/axiosInstance";

import type {
  TeamFinder,
  CreateTeamFinderDto,
  ApplyTeamFinderDto,
} from "../types/teamFinder.types";

export const teamFinderService = {

  async getAll(): Promise<TeamFinder[]> {

    const response =
      await axiosInstance.get("/TeamFinder/all");

    return response.data;
  },

  async create(dto: CreateTeamFinderDto) {

    const response =
      await axiosInstance.post(
        "/TeamFinder",
        dto
      );

    return response.data;
  },

  async getById(id: number): Promise<TeamFinder> {

    const response =
      await axiosInstance.get(
        `/TeamFinder/${id}`
      );

    return response.data;
  },

  async apply(
    id: number,
    dto: ApplyTeamFinderDto
  ) {

    const response =
      await axiosInstance.post(
        `/TeamFinder/${id}/apply`,
        dto
      );

    return response.data;
  },

};