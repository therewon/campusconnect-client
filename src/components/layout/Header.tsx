import NotificationBadge from "../../features/notifications/components/NotificationBadge";
import {
  useRealtimeNotifications,
} from "../../features/notifications/hooks/useNotifications";

export default function Header() {

  // SignalR notification dinləyicisini başladır
  useRealtimeNotifications();

  return (
    <header className="header">

      <h2>CampusConnect</h2>

      <div className="header-right">

        <div className="notification">

          <NotificationBadge />

        </div>

        <div className="profile">

          <div className="avatar">
            M
          </div>

          <span>
            Mirtalıb
          </span>

        </div>

      </div>

    </header>
  );
}