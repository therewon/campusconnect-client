import {
  useAdminUsers,
  useBanUser,
  useUnbanUser,
} from "../hooks/useAdminUsers";

const UserTable = () => {
  const { data, isLoading } = useAdminUsers();

  const banMutation = useBanUser();
  const unbanMutation = useUnbanUser();

  if (isLoading) return <p>Loading...</p>;

 return (
  <div className="admin-card">

    <div className="table-toolbar">
      <h2>İstifadəçilər</h2>
    </div>

    <div className="table-wrapper">

      <table className="endpoint-table">

        <thead>
          <tr>
            <th>Ad</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Status</th>
            <th>Əməliyyat</th>
          </tr>
        </thead>

        <tbody>

          {data?.map((user:any)=>(
            <tr key={user.id}>

              <td>{user.fullName}</td>

              <td>{user.email}</td>

              <td>{user.role}</td>

              <td>

                {user.isBanned ? (

                  <span
                    style={{
                      color:"#dc2626",
                      fontWeight:600
                    }}
                  >
                    Ban olunub
                  </span>

                ) : (

                  <span
                    style={{
                      color:"#16a34a",
                      fontWeight:600
                    }}
                  >
                    Aktiv
                  </span>

                )}

              </td>

              <td>

                {user.isBanned ? (

                  <button
                    className="save-btn"
                    onClick={() => unbanMutation.mutate(user.id)}
                  >
                    Unban
                  </button>

                ) : (

                  <button
                    className="delete-btn"
                    onClick={() => banMutation.mutate(user.id)}
                  >
                    Ban
                  </button>

                )}

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>

  </div>
);
};

export default UserTable;