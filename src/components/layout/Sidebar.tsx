import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Megaphone,
  CalendarDays,
  Search,
  Users,
  MessageCircle,
  Bell,
  Shield,
  UserCog,
  KeyRound,
  BadgeCheck,
} from "lucide-react";

import { getCurrentRole } from "../../utils/auth";

export default function Sidebar() {
  const role = getCurrentRole();

  const isAdmin =
    role === "Admin" || role === "SuperAdmin";

  const isSuperAdmin =
    role === "SuperAdmin";

  return (
    <aside className="sidebar">

      <div className="logo">

        <div className="logo-circle">
          CC
        </div>

        <div>

          <h2>CampusConnect</h2>

          <span>Admin Panel</span>

        </div>

      </div>

      <div className="sidebar-section">

        <NavLink to="/">
          <LayoutDashboard size={20}/>
          Dashboard
        </NavLink>

        <NavLink to="/announcements">
          <Megaphone size={20}/>
          Elanlar
        </NavLink>

        <NavLink to="/events">
          <CalendarDays size={20}/>
          Hadisələr
        </NavLink>

        <NavLink to="/lost-found">
          <Search size={20}/>
          İtkin/Tapılan
        </NavLink>

        <NavLink to="/team-finder">
          <Users size={20}/>
          Team Finder
        </NavLink>

        <NavLink to="/messages">
          <MessageCircle size={20}/>
          Mesajlar
        </NavLink>

        <NavLink to="/notifications">
          <Bell size={20}/>
          Bildirişlər
        </NavLink>

      </div>

      {isAdmin && (

        <>

          <div className="sidebar-title">
            ADMIN
          </div>

          <NavLink to="/admin">
            <Shield size={20}/>
            Dashboard
          </NavLink>

          <NavLink to="/admin/users">
            <Users size={20}/>
            Users
          </NavLink>

          <NavLink to="/admin/announcements">
            <BadgeCheck size={20}/>
            Moderasiya
          </NavLink>

        </>

      )}

      {isSuperAdmin && (

        <>

          <div className="sidebar-title">
            SUPER ADMIN
          </div>

          <NavLink to="/admin/authorization-endpoints">
            <KeyRound size={20}/>
            Authorization
          </NavLink>

          <NavLink to="/admin/roles">
            <UserCog size={20}/>
            Roles
          </NavLink>

        </>

      )}

    </aside>
  );
}