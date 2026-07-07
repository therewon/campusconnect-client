    import { useMessages } from "../hooks/useMessages";
    import MessageBubble from "./MessageBubble";
    import MessageInput from "./MessageInput";

    interface Props{
        otherUserId:string;
    }

    export default function ChatWindow({
        otherUserId
    }:Props){

        const {data,isLoading}=useMessages(otherUserId);

        if(isLoading) return <p>Loading...</p>;

        return(

            <div className="chat-window">

                <div className="chat-header">

                    <h3>Söhbət</h3>

                </div>

                <div className="messages">

                    {data?.map((message:any)=>(

                        <MessageBubble
                            key={message.id}
                            message={message}
                        />

                    ))}

                </div>

                <MessageInput
                    receiverId={otherUserId}
                />

            </div>

        )

    }