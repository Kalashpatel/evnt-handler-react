import React from "react";

function StudentCard({ student, deleteStudent, toggleDetails, updateAttendance }) {
  return (
    <div className="card">
      <h3>{student.name}</h3>

      <button onClick={() => toggleDetails(student.id)}>
        {student.showDetails ? "Hide Details" : "Show Details"}
      </button>

      {student.showDetails && (
        <>
          <p>ID: {student.id}</p>
          <p>Status: {student.attendance}</p>

          <button onClick={() => updateAttendance(student.id, "present")}>
            Mark Present
          </button>

          <button onClick={() => updateAttendance(student.id, "absent")}>
            Mark Absent
          </button>

          <button className="delete" onClick={() => deleteStudent(student.id)}>
            Delete Student
          </button>
        </>
      )}
    </div>
  );
}

export default StudentCard;
