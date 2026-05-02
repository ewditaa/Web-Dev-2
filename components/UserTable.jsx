import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import UserRow from "./UserRow";

function UserTable({ search }) {
  const { users } = useContext(UserContext);

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <table>
      <thead>
        <tr>
          <th>User</th>
          <th>Engagement</th>
          <th>Status</th>
          <th>Update</th>
        </tr>
      </thead>

      <tbody>
        {filtered.map((u, i) => (
          <UserRow key={i} user={u} index={i} />
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;