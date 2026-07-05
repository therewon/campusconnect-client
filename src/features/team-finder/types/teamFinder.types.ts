export interface TeamFinder {
  id: number;
  title: string;
  description: string;
  skillsNeeded: string[]; // Изменено со string на string[]
  createdById: string;
  createdByName: string;
  createdAt: string;
  applicationCount: number;
}

export interface CreateTeamFinderDto {
  title: string;
  description?: string;
  skillsNeeded: string[];
}

export interface ApplyTeamFinderDto {
  message?: string;
}