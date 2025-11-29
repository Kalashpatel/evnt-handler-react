import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (name) => {
    setStudents([
      ...students,
      {
        id: Date.now(),
        name,
        showDetails: false,
        attendance: "absent",
      },
    ]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const toggleDetails = (id) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, showDetails: !s.showDetails } : s
      )
    );
  };

  const updateAttendance = (id, status) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, attendance: status } : s
      )
    );
  };

  return (
    <div className="app-container">
      <h1> Student Activity Manager</h1>

      <div className="dashboard">
        <p>Total Students: {students.length}</p>
        <p>
          Present: {students.filter((s) => s.attendance === "present").length}
        </p>
        <p>
          Absent: {students.filter((s) => s.attendance === "absent").length}
        </p>
      </div>

      <StudentForm addStudent={addStudent} />

      <StudentList
        students={students}
        deleteStudent={deleteStudent}
        toggleDetails={toggleDetails}
        updateAttendance={updateAttendance}
      />
    </div>
  );
}

export default App;

