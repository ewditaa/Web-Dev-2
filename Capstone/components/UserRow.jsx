import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserRow({ user, index }) {
  const { users, setUsers } = useContext(UserContext);

  const update = (value) => {
    const updated = [...users];
    updated[index].score = Number(value);
    setUsers(updated);
  };

  return (
    <tr>
      <td>{user.name}</td>
      <td className="score">{user.score}</td>

      <td>
        {user.score >= 40 ? (
          <span className="pass">HIGH</span>
        ) : (
          <span className="fail">LOW</span>
        )}
      </td>

      <td>
        <input
          type="number"
          defaultValue={user.score}
          onChange={(e) => update(e.target.value)}
        />
      </td>
    </tr>
  );
}

export default UserRow;
