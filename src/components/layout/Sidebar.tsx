import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>CampusConnect</h2>

      <nav>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/announcements">Elanlar</NavLink>
        <NavLink to="/events">Hadisələr</NavLink>
        <NavLink to="/lost-found">İtkin/Tapılan</NavLink>
        <NavLink to="/team-finder">Team Finder</NavLink>
        <NavLink to="/messages">Mesajlar</NavLink>
      </nav>
    </aside>
  );
}