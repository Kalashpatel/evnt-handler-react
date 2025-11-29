import React from "react";
import { useRef, useState } from "react";

function StudentForm({ addStudent }) {
  const inputRef = useRef(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = inputRef.current.value.trim();

    if (!name) {
      setError("Name cannot be empty");
      inputRef.current.focus();
      return;
    }

    addStudent(name);
    inputRef.current.value = "";
    inputRef.current.focus();
    setError("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="student-form">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter student name"
          autoFocus
        />
        <button type="submit">Add Student</button>
      </form>

      {error && <p className="error">{error}</p>}
    </>
  );
}

export default StudentForm;