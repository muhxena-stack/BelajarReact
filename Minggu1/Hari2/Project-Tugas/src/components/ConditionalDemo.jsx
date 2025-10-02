import React from "react";

function ConditionalDemo() {
  const isLogin = true;     // ubah true/false buat coba
  const unreadMessages = 3; // coba ganti angka

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
      <h2>Soal 3: Conditional Rendering</h2>

      {/* Ternary operator */}
      <p>{isLogin ? "Selamat datang kembali!" : "Silakan login dulu."}</p>

      {/* Logical AND (&&) */}
      {unreadMessages > 0 && (
        <p>Kamu punya {unreadMessages} pesan baru </p>
      )}
    </div>
  );
}

export default ConditionalDemo;
