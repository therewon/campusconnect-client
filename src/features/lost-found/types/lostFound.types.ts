export type LostFoundStatus = "Lost" | "Found" | "Resolved";

export interface LostFound {
  id: number;
  title: string;
  description?: string;
  contact: string;
  status: LostFoundStatus;
  authorName: string;
  authorId: string;
  createdAt: string;
}

export interface CreateLostFoundRequest {
  title: string;
  description?: string;
  contact: string;
  status: LostFoundStatus;
}

export interface UpdateLostFoundRequest {
  title: string;
  description?: string;
  contact: string;
  status: LostFoundStatus;
}
