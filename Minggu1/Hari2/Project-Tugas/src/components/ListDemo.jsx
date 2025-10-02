import React from "react";

function ListDemo() {
  const fruits = ["Apel", "Jeruk", "Mangga", "Pisang", "Semangka"];

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "16px",
        border: "1px solid #aaa",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h2>Soal 4: Render Array Data</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {fruits.map((fruit, index) => (
          <li key={index} style={{ margin: "5px 0" }}>
             ✅{fruit}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListDemo;
