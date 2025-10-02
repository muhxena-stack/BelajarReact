import React from "react";

function ExpressionDemo() {
  const name = "Xena";
  const angka1 = 12;
  const angka2 = 8;

  const tambah = (a, b) => a + b;
  const sapa = (user) => `Halo, ${user}!`;

  return (
    <div style={{ marginTop: "20px", padding: "16px", border: "1px solid #aaa", borderRadius: "10px", textAlign: "center" }}>
      <p>Hasil {angka1} + {angka2} = {tambah(angka1, angka2)}</p>
      <p>{sapa(name)}</p>
      <p>Nama huruf besar: {name.toUpperCase()}</p>
    </div>
  );
}

export default ExpressionDemo;
