import StudentRow from "./StudentRow";

function StudentTable({ students, updateScore }) {
  const total = students.length;
  const passed = students.filter((s) => s.score >= 40).length;
  const avg =
    total === 0
      ? 0
      : Math.floor(
          students.reduce((sum, s) => sum + s.score, 0) / total
        );

  return (
    <>
      {/* STATS */}
      <div className="stats">
        <div>Total: {total}</div>
        <div>Passed: {passed}</div>
        <div>Avg Score: {avg}</div>
      </div>

      {/* TABLE */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <StudentRow
              key={index}
              student={student}
              index={index}
              updateScore={updateScore}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default StudentTable;