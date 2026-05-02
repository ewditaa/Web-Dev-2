import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function AddUserForm() {
  const { users, setUsers } = useContext(UserContext);
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const addUser = () => {
    if (!name || score === "") return;

    setUsers([...users, { name, score: Number(score) }]);
    setName("");
    setScore("");
  };

  return (
    <div className="form">
      <input
        placeholder="Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Engagement"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />

      <button onClick={addUser}>+ ADD</button>
    </div>
  );
}

export default AddUserForm;