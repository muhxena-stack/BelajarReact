import React, { useState } from "react";
import InputBox from "./component/InputBox";
import DisplayBox from "./component/DisplayBox";

export default function App() {
  // State disimpan di komponen induk
  const [message, setMessage] = useState("Halo dunia!");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Soal 3</h1>
      <p>
        Komponen <b>InputBox</b> bisa mengubah state, dan perubahan langsung
        terlihat di <b>DisplayBox</b>.
      </p>

      {/* Komponen saudara menerima props dari parent */}
      <InputBox message={message} setMessage={setMessage} />
      <DisplayBox message={message} />
    </div>
  );
}
