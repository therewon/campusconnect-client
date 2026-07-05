import { BellRing } from "lucide-react";
import { useMarkRead } from "../hooks/useNotifications";

interface Props {
  notification: any;
}

export default function NotificationItem({
  notification,
}: Props) {

  const markRead = useMarkRead();

  return (

    <div
      className={
        notification.isRead
          ? "notification-item"
          : "notification-item unread"
      }
    >

      <div className="notification-left">

        <div className="notification-avatar">
          <BellRing size={18} />
        </div>

      </div>

      <div className="notification-content">

        <h4>
          {notification.title}
        </h4>

        <p>
          {notification.message}
        </p>

        <small>
          {new Date(notification.createdAt).toLocaleString()}
        </small>

      </div>

      {!notification.isRead && (

        <button
          className="read-btn"
          onClick={() => markRead.mutate(notification.id)}
        >
          Oxundu
        </button>

      )}

    </div>

  );
}