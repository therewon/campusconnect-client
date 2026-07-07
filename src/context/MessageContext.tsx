import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import SignalRService from "..//lib/signalr/signalr";

const MessageContext = createContext<any>(null);

export function MessageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    SignalRService.start();

    SignalRService.on(
      "ReceiveMessage",
      (senderId: string, message: string) => {
        setMessages((prev) => [
          ...prev,
          {
            senderId,
            content: message,
          },
        ]);
      }
    );

    return () => {
      SignalRService.off("ReceiveMessage");
    };
  }, []);

  return (
    <MessageContext.Provider
      value={{
        messages,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
}

export function useRealtimeMessages() {
  return useContext(MessageContext);
}