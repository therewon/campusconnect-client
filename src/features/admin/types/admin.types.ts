export interface AdminUser {
  id: string;
  fullName: string;
  email: string;
  role: string;
  isBanned: boolean;
}

export interface AdminStats {
  totalUsers: number;
  totalAnnouncements: number;
  totalEvents: number;
  totalComments: number;
}