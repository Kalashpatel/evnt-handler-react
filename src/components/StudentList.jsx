import React from "react";
import StudentCard from "./StudentCard";

function StudentList({ students, deleteStudent, toggleDetails, updateAttendance }) {
  return (
    <>
      <h2>Student List</h2>

      {students.length === 0 && (
        <p className="empty">No Students Found</p>
      )}

      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          deleteStudent={deleteStudent}
          toggleDetails={toggleDetails}
          updateAttendance={updateAttendance}
        />
      ))}
    </>
  );
}

export default StudentList;
