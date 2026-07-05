import { useAdminUsers } from "../../admin/hooks/useAdminUsers";

interface Props {
  selectedUser: number |null;
  onSelect:(id:number)=>void;
}

export function ConversationList({
    selectedUser,
    onSelect,
}:Props){

    const {data:users,isLoading}=useAdminUsers();

    if(isLoading) return <p>Loading...</p>;

    return(

        <div className="conversation-list">

            {users?.map((user:any)=>(

                <div
                    key={user.id}
                    className={
                        selectedUser===user.id
                        ? "conversation-item active"
                        :"conversation-item"
                    }
                    onClick={()=>onSelect(user.id)}
                >

                    <div className="avatar">
                        {user.fullName.charAt(0)}
                    </div>

                    <div className="conversation-info">

                        <h4>{user.fullName}</h4>

                        <small>{user.email}</small>

                    </div>

                </div>

            ))}

        </div>

    )

}