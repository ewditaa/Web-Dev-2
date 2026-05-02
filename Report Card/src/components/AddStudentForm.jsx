import { useState } from "react";

function AddStudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = () => {
    if (!name || score === "") return;

    addStudent(name, Number(score));
    setName("");
    setScore("");
  };

  return (
    <div className="form">
      <input
        placeholder="Student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Score (0-100)"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />

      <button onClick={handleSubmit}>+ ADD</button>
    </div>
  );
}

export default AddStudentForm;