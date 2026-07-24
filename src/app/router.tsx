import { createBrowserRouter, Navigate } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import { RoleBasedRoute } from "../components/guards/RoleBasedRoute";
import { RoleGuard } from "../components/guards/RoleGuard";

import { AuthLayout } from "../components/layout/AuthLayout";
// import { ProtectedRoute } from "../components/guards/ProtectedRoute";
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

import LostFoundPage from "../features/lost-found/pages/LostFoundPage";
import CreateLostFoundPage from "../features/lost-found/pages/CreateLostFoundPage";
import LostFoundDetailPage from "../features/lost-found/pages/LostFoundDetailPage";



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
import RegistrationForm from '../components/registration/RegistrationForm.tsx'
import UniversitiesPage from "../features/universities/pages/UniversitiesPage.tsx";
import UniversitiesDetailPage from "../features/universities/pages/UniversitiesDetailPage.tsx";
import HomePage from "../features/home/page/HomePage.tsx";
import { HomeLayout } from "../components/layout/HomeLayout.tsx";

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
        element: <RegistrationForm />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPasswordPage />,
      },
      {
        path: "/reset-password",
        element: <ResetPasswordPage />,
      }
    ],
  },

  {
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      }
    ]
  },


  // Protected Routes

  
  // 2. Защищенные маршруты (Все объединены под одним MainLayout)

  {
    element: (
    // <ProtectedRoute>
      <MainLayout />
    // </ProtectedRoute>
    ),
    children: [
      // Dashboard
      {
        path: "/dashboard",
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

      // Universities
      {
        path: "/universities",
        element: <UniversitiesPage />
      },

      {
        path: "/universities/:id",
        element: <UniversitiesDetailPage />
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
      // İtirilmiş & Tapılmış (Lost & Found)
      {
        path: "/lost-found",
        element: <LostFoundPage />,
      },
      {
        path: "/lost-found/create",
        element: <CreateLostFoundPage />,
      },
      {
        path: "/lost-found/:id",
        element: <LostFoundDetailPage />,
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