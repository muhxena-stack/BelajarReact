import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), text: input, completed: false },
    ]);
    setInput("");
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      <h1>Soal 4:</h1>
      <h2>Todo List</h2>

      {/* Input + Tombol Tambah */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tambah tugas baru..."
          style={{
            padding: "8px",
            width: "220px",
            borderRadius: "8px",
            border: "1px solid #aaa",
            marginRight: "10px",
          }}
        />
        <button
          onClick={handleAdd}
          style={{
            padding: "8px 12px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Tambah
        </button>
      </div>

      {/* Daftar Tugas */}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              backgroundColor: "#f9f9f9",
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              onClick={() => handleToggle(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "gray" : "black",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() => handleDelete(todo.id)}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "6px",
                padding: "5px 8px",
                cursor: "pointer",
              }}
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p style={{ color: "gray" }}>Belum ada tugas. Tambahkan di atas!</p>
      )}
    </div>
  );
}

export default TodoList;
