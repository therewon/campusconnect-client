import { createBrowserRouter, Navigate } from "react-router-dom";

import { AuthLayout } from "../components/layout/AuthLayout";
import { MainLayout } from "../components/layout/MainLayout";
import { ProtectedRoute } from "../components/guards/ProtectedRoute";
import { RoleBasedRoute } from "../components/guards/RoleBasedRoute";

import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import ForgotPasswordPage from "../features/auth/pages/ForgotPasswordPage";
import ResetPasswordPage from "../features/auth/pages/ResetPasswordPage";

import DashboardPage from "../features/dashboard/pages/DashboardPage";
import AuthorizationEndpointsPage from "../features/admin/pages/AuthorizationEndpointsPage";
import RolesPage from "../features/admin/pages/RolesPage";
export const router = createBrowserRouter([
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
    {
      path: "/admin/authorization-endpoints",
      element: (
        <RoleBasedRoute allowedRoles={["SuperAdmin"]}>
          <AuthorizationEndpointsPage />
        </RoleBasedRoute>
      ),
    },
    {
      path: "/admin/roles",
      element: (
        <RoleBasedRoute allowedRoles={["SuperAdmin"]}>
          <RolesPage />
        </RoleBasedRoute>
      ),
    },
  ],
},
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
      {
        path: "/admin/authorization-endpoints",
        element: (
          <RoleBasedRoute allowedRoles={["SuperAdmin"]}>
            <AuthorizationEndpointsPage />
          </RoleBasedRoute>
        ),
      },
    ],
  },

  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
]);