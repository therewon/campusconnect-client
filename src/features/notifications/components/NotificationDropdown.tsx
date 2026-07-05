import {
  useMarkAllRead,
  useNotifications,
} from "../hooks/useNotifications";

import NotificationItem from "./NotificationItem";

export default function NotificationDropdown() {

  const { data, isLoading } = useNotifications();

  const markAll = useMarkAllRead();

  if (isLoading)
    return <p>Yüklənir...</p>;

  return (

    <div className="notification-dropdown">

      <div className="notification-header">

        <h3>Bildirişlər</h3>

        <button
          className="mark-all-btn"
          onClick={() => markAll.mutate()}
        >
          Hamısını oxunmuş et
        </button>

      </div>

      <div className="notification-list">

        {data?.length === 0 && (
          <p className="empty-notification">
            Bildiriş yoxdur.
          </p>
        )}

        {data?.map((notification: any) => (

          <NotificationItem
            key={notification.id}
            notification={notification}
          />

        ))}

      </div>

    </div>

  );
}