import { Bell } from "lucide-react";
import { useUnreadCount } from "../hooks/useNotifications";

export default function NotificationBadge() {
  const { data } = useUnreadCount();

  return (
    <div className="notification-icon">

      <Bell size={22} />

      {data !== undefined && data > 0 && (
        <span className="notification-badge">
          {data > 99 ? "99+" : data}
        </span>
      )}

    </div>
  );
}