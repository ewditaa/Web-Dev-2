import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Stats() {
  const { users } = useContext(UserContext);

  const total = users.length;
  const high = users.filter(u => u.score >= 40).length;
  const avg =
    total === 0
      ? 0
      : Math.floor(users.reduce((s, u) => s + u.score, 0) / total);

  return (
    <div className="stats">
      <div>Total: {total}</div>
      <div>High: {high}</div>
      <div>Avg: {avg}</div>
    </div>
  );
}

export default Stats;
