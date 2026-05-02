function StudentRow({ student, index, updateScore }) {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.score}</td>

      <td>
        {student.score >= 40 ? (
          <span className="pass">PASS</span>
        ) : (
          <span className="fail">FAIL</span>
        )}
      </td>

      <td>
        <input
          type="number"
          defaultValue={student.score}
          onChange={(e) =>
            updateScore(index, Number(e.target.value))
          }
        />
      </td>
    </tr>
  );
}

export default StudentRow;