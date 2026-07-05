import {useState} from "react";
import {useSendMessage} from "../hooks/useMessages";

interface Props{
    receiverId:string;
}

export default function MessageInput({
    receiverId
}:Props){

    const[text,setText]=useState("");

    const send=useSendMessage();

    const handleSend=()=>{

        if(!text.trim()) return;

        send.mutate({

            receiverId,

            content:text

        });

        setText("");

    }

    return(

        <div className="message-input">

            <input
                value={text}
                onChange={(e)=>setText(e.target.value)}
                placeholder="Mesaj yaz..."
            />

            <button
                onClick={handleSend}
            >
                Göndər
            </button>

        </div>

    )

}