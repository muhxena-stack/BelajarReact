import React from "react";

function Dashboard({ isLoggedIn, unreadMessages }) {
  return (
    <div style={{
      backgroundColor: "#000000ff",
      padding: "16px",
      borderRadius: "10px",
      margin: "12px 0"
    }}>

      {isLoggedIn ? (
        <p style={{ color: "#00ffb7ff", fontWeight: "bold" }}>Selamat datang kembali!</p>
      ) : (
        <p style={{ color: "#dc2626", fontWeight: "bold" }}>Silakan login terlebih dahulu.</p>
      )}

      {isLoggedIn && unreadMessages.length > 0 && (
        <p style={{ color: "#0051ffff" }}>Anda memiliki {unreadMessages.length} pesan baru.</p>
      )}
      {isLoggedIn && unreadMessages.length === 0 && (
        <p style={{ color: "#949494ff" }}>Tidak ada pesan baru.</p>
      )}
    </div>
  );
}

export default Dashboard;
