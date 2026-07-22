import { useConversations } from "../hooks/useMessages";

interface Props {
  selectedUser: string | null;
  onSelect: (id: string) => void;
}

export function ConversationList({
  selectedUser,
  onSelect,
}: Props) {
  const { data: users, isLoading } = useConversations();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="conversation-list">
      {/* {users?.map((user: any) => (
        <div
          key={user.otherUserId}
          className={
            selectedUser === user.otherUserId
              ? "conversation-item active"
              : "conversation-item"
          }
          onClick={() => onSelect(user.otherUserId)}
        >
          <div className="avatar">
            {user.otherUserName.charAt(0)}
          </div>

          <div className="conversation-info">
            <h4>{user.otherUserName}</h4>
            <small>{user.lastMessageContent}</small>
          </div>
        </div>
      ))} */}
    </div>
  );
}