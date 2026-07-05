import { useState } from "react";
import { ConversationList } from "../components/ConversationList";
import ChatWindow from "../components/ChatWindow";

export default function MessagesPage() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  return (
    <div className="messages-layout">

      <div className="conversation-sidebar">
        <h2>Mesajlar</h2>

        <ConversationList
          selectedUser={selectedUserId}
          onSelect={setSelectedUserId}
        />
      </div>

      <div className="conversation-content">
        {selectedUserId ? (
          <ChatWindow otherUserId={selectedUserId.toString()} />
        ) : (
          <div className="empty-chat">
            <h2>💬</h2>
            <p>Söhbətə başlamaq üçün istifadəçi seçin.</p>
          </div>
        )}
      </div>

    </div>
  );
}