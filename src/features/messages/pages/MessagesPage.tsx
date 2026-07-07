import { useState } from "react";
import { ConversationList } from "../components/ConversationList";
import ChatWindow from "../components/ChatWindow";

export default function MessagesPage() {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

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
        {selectedUserId && (
          <ChatWindow otherUserId={selectedUserId} />
        )}
      </div>
    </div>
  );
}