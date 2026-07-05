import { createBrowserRouter, Navigate } from "react-router-dom";

import { AuthLayout } from "../components/layout/AuthLayout";
import MainLayout from "../components/layout/MainLayout";
import { ProtectedRoute } from "../components/guards/ProtectedRoute";
import { RoleBasedRoute } from "../components/guards/RoleBasedRoute";
import { RoleGuard } from "../components/guards/RoleGuard";

import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import ForgotPasswordPage from "../features/auth/pages/ForgotPasswordPage";
import ResetPasswordPage from "../features/auth/pages/ResetPasswordPage";

import DashboardPage from "../features/dashboard/pages/DashboardPage";

import AnnouncementsPage from "../features/announcements/pages/AnnouncementsPage";
import CreateAnnouncementPage from "../features/announcements/pages/CreateAnnouncementPage";



import EventsPage from "../features/events/pages/EventsPage";
import CreateEventPage from "../features/events/pages/CreateEventPage";
import EditEventPage from "../features/events/pages/EditEventPage";

import AdminAnnouncementsPage from "../features/admin/pages/AdminAnnouncementsPage";
import AuthorizationEndpointsPage from "../features/admin/pages/AuthorizationEndpointsPage";
import RolesPage from "../features/admin/pages/RolesPage";
import UsersPage from "../features/admin/pages/UsersPage";
import AdminDashboardPage from "../features/admin/pages/AdminDashboardPage";

import MessagesPage from "../features/messages/pages/MessagesPage";
import NotificationsPage from "../features/notifications/pages/NotificationsPage";

import TeamFinderPage from "../features/team-finder/pages/TeamFinderPage";
import CreateTeamFinder from "../features/team-finder/pages/CreateTeamFinderPage";
import TeamFinderDetailPage from "../features/team-finder/pages/TeamFinderDetailPage";

export const router = createBrowserRouter([
  // Public Routes
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPasswordPage />,
      },
      {
        path: "/reset-password",
        element: <ResetPasswordPage />,
      },
    ],
  },


  // Protected Routes

  
  // 2. Защищенные маршруты (Все объединены под одним MainLayout)

  {
    element: (
      <ProtectedRoute>
      <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },

      // Announcements
      {
        path: "/announcements",
        element: <AnnouncementsPage />,
      },
      {
        path: "/announcements/create",
        element: <CreateAnnouncementPage />,
      },


      // Messages
      {
        path: "/messages",
        element: <MessagesPage />,
      },

      // Notifications
      {
        path: "/notifications",
        element: <NotificationsPage />,
      },

      // Admin Announcements

      // Hadisələr (Events)
      {
        path: "/events",
        element: <EventsPage />,
      },
      {
        path: "/events/create",
        element: <CreateEventPage />,
      },
      {
        path: "/events/:id/edit",
        element: <EditEventPage />,
      },
      // Панель администратора

      {
        path: "/admin/announcements",
        element: (
          <RoleGuard>
          <AdminAnnouncementsPage />
          </RoleGuard>
        ),
      },

      // Users
      {
        path: "/admin/users",
        element: (
          <RoleGuard>
            <UsersPage />
          </RoleGuard>
        ),
      },

      // Admin Stats
      {
        path: "/admin/stats",
        element: (
          <RoleGuard>
            <AdminDashboardPage />
          </RoleGuard>
        ),
      },

      // Authorization Endpoints (Only SuperAdmin)
      {
        path: "/admin/authorization-endpoints",
        element: (
          <RoleBasedRoute allowedRoles={["SuperAdmin"]}>
          <AuthorizationEndpointsPage />
          </RoleBasedRoute>
        ),
      },

      // Roles (Only SuperAdmin)
      {
        path: "/admin/roles",
        element: (
          <RoleBasedRoute allowedRoles={["SuperAdmin"]}>
          <RolesPage />
          </RoleBasedRoute>
        ),
      },
      {
        path: "/team-finder",
        element: <TeamFinderPage />,
      },
      {
        path: "/team-finder/create",
        element: <CreateTeamFinder />,
      },
      {
        path: "/team-finder/:id",
        element: <TeamFinderDetailPage />,
      },
    ],
  },


  // Fallback

  
  // 3. Дефолтный редирект для несуществующих страниц

  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
]);