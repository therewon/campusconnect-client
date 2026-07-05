export const ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
  },
  
 ANNOUNCEMENTS: {
  GET_ALL: "/announcements",
  CREATE: "/announcements",

  APPROVE: (id: number) => `/admin/announcements/${id}/approve`,
  REJECT: (id: number) => `/admin/announcements/${id}/reject`,
},
  COMMENTS: {
    GET_BY_POST: (id: number) => `/comments/post/${id}`,
    CREATE: "/comments",
  },
ADMIN: {
  GET_USERS: "/admin/users",

  BAN_USER: (id: string) => `/admin/users/${id}/ban`,

  UNBAN_USER: (id: string) => `/admin/users/${id}/unban`,

  GET_STATS: "/admin/stats",

  APPROVE_ANNOUNCEMENT: (id: number) =>
    `/admin/announcements/${id}/approve`,

  REJECT_ANNOUNCEMENT: (id: number) =>
    `/admin/announcements/${id}/reject`,
},
  LIKES: {
    LIKE: "/likes/like",
    
    DISLIKE: "/likes/dislike",
  },
};