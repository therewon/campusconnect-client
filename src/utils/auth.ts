import { jwtDecode } from "jwt-decode";
import { TokenManager } from "./tokenManager";

interface JwtPayload {
  name?: string;
  unique_name?: string;
  email?: string;
  Role?: string | string[];
  role?: string | string[];
  ["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]?: string | string[];
}

// Returns the role(s) as a flat string array
export function getUserRoles(): string[] {
  const token = TokenManager.getAccessToken();
  if (!token) return [];

  try {
    const decoded = jwtDecode<JwtPayload>(token);
    const raw =
      decoded.Role ??
      decoded.role ??
      decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] ??
      null;

    if (!raw) return [];
    return Array.isArray(raw) ? raw : [raw];
  } catch {
    return [];
  }
}

// Backward-compatible helper — returns first role as string
export function getCurrentRole(): string | null {
  const roles = getUserRoles();
  return roles.length > 0 ? roles[0] : null;
}

export function hasRole(role: string): boolean {
  return getUserRoles().includes(role);
}

export function isAdmin(): boolean {
  const roles = getUserRoles();
  return roles.includes("Admin") || roles.includes("SuperAdmin");
}

export function getCurrentUserId(): string | null {
  const token = TokenManager.getAccessToken();
  if (!token) return null;
  try {
    const decoded = jwtDecode<Record<string, unknown>>(token);
    const value =
      decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"] ??
      decoded.sub ??
      decoded.nameid ??
      decoded.UserId ??
      decoded.userId ??
      null;
    return typeof value === "string" ? value : null;
  } catch {
    return null;
  }
}

export function getCurrentUserName(): string {
  const token = TokenManager.getAccessToken();
  if (!token) return "İstifadəçi";

  try {
    const decoded = jwtDecode<JwtPayload & Record<string, string>>(token);
    return (
      decoded.name ??
      decoded.unique_name ??
      decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"] ??
      decoded.email ??
      "İstifadəçi"
    );
  } catch {
    return "İstifadəçi";
  }
}
