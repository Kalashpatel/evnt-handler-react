# 🎓 Student Activity Manager

Student Activity Manager is a **React-based interactive application** that helps students learn and practice important React concepts such as **events**, **conditional rendering**, **refs**, **fragments**, and **passing arguments in event handlers**.

This project demonstrates a simple student management system where users can:

- Add students  
- Toggle student details  
- Mark present/absent  
- Delete students  

Everything is handled **purely with React state**, without any backend or database.

---

## 🚀 Features

### ✅ React Concepts Covered
- **Event Handling** (`onChange`, `onSubmit`, `onClick`)
- **Conditional Rendering**
- **State Management (useState)**
- **Refs Usage (focus management)**
- **Passing arguments in event handlers**
- **Fragments to avoid extra DOM elements**

---

## 🧩 Component Flow

### 📌 `StudentForm`
- Uses **Refs** to read input value.
- Autofocuses input on load.
- Resets and refocuses after adding a student.
- Shows validation errors.

### 📌 `StudentList`
- Renders all students using **Fragments**.
- Shows "No Students Found" when list is empty.

### 📌 `StudentCard`
- Shows name, attendance, and toggle details.
- Buttons use **event handler arguments** like:
  ```js
  onClick={() => deleteStudent(id)}


## Screenshot

![App Screenshot](screenshot/Screenshot%202025-11-29%20161411.png)