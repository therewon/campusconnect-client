interface Props{
    message:any;
}

export default function MessageBubble({
    message
}:Props){

    const isMine=message.isMine;

    return(

        <div
            className={
                isMine
                ?"bubble mine"
                :"bubble other"
            }
        >

            <p>{message.content}</p>

            <span>

                {new Date(message.createdAt)
                    .toLocaleTimeString([],{
                        hour:"2-digit",
                        minute:"2-digit"
                    })}

            </span>

        </div>

    )

}