import { useState } from "react";
import { useSendMessage } from "../hooks/useMessages";

interface Props {
  receiverId: string;
}

export default function MessageInput({
  receiverId,
}: Props) {
  const [text, setText] = useState("");

  const sendMessage = useSendMessage();

  async function handleSend() {
    if (!text.trim()) return;

    await sendMessage.mutateAsync({
      receiverId,
      content: text,
    });

    setText("");
  }

  return (
    <div className="message-input">

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Mesaj yaz..."
        onKeyDown={(e) => {
          if (e.key === "Enter")
            handleSend();
        }}
      />

      <button onClick={handleSend}>
        Göndər
      </button>

    </div>
  );
}