import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import SignalRService from "../lib/signalr/signalr";

const NotificationContext = createContext<any>(null);

export function NotificationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    SignalRService.start();

    SignalRService.on(
      "ReceiveNotification",
      (notification: any) => {
        setNotifications((prev) => [
          notification,
          ...prev,
        ]);
      }
    );

    return () => {
      SignalRService.off("ReceiveNotification");
    };
  }, []);

  return (
    <NotificationContext.Provider
      value={{
        notifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useRealtimeNotifications() {
  return useContext(NotificationContext);
}