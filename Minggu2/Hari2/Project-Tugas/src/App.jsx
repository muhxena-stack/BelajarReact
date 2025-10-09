import React, { useState } from "react";
import Greeting from "./components/Greeting";
import Dashboard from "./components/Dashboard";
import StatusMessage from "./components/StatusMessage";
import ProductList from "./components/ProductList";
import ItemList from "./components/ItemList";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [messages, setMessages] = useState(["Halo!", "Selamat datang!"]);
  const [status, setStatus] = useState("loading");

  const availableItems = [
    { id: 1, name: "Buku" },
    { id: 2, name: "Pensil" },
    { id: 3, name: "Penghapus" },
  ];
  const noItems = [];

  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);
  const clearMessages = () => setMessages([]);
  const addMessage = () => {
    const newMsg = prompt("Masukkan pesan baru:");
    if (newMsg) setMessages([...messages, newMsg]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1 style={{ marginBottom: "20px" }}>Semua Jenis Rendering di React </h1>

      <Greeting isLoggedIn={isLoggedIn} />
      <Dashboard isLoggedIn={isLoggedIn} unreadMessages={messages} />
      <StatusMessage status={status} />
      <ProductList />
      <ItemList items={availableItems} />
      <hr style={{ margin: "16px 0" }} />
      <ItemList items={noItems} />

      {/* Tombol kontrol */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={toggleLogin} style={{
          padding: "8px 16px", borderRadius: "8px", border: "none",
          backgroundColor: isLoggedIn ? "#dc2626" : "#16a34a", color: "white",
          marginRight: "10px", cursor: "pointer"
        }}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>

        {isLoggedIn && <>
          <button onClick={clearMessages} style={{
            padding: "8px 16px", borderRadius: "8px", border: "none",
            backgroundColor: "#2563eb", color: "white", marginRight: "10px",
            cursor: "pointer"
          }}>Hapus Pesan</button>

          <button onClick={addMessage} style={{
            padding: "8px 16px", borderRadius: "8px", border: "none",
            backgroundColor: "#059669", color: "white", cursor: "pointer"
          }}>Tambah Pesan</button>
        </>}
      </div>

      {/* Tombol ganti status */}
      <div style={{ marginTop: "20px" }}>
        {["loading","success","error","unknown"].map(s => (
          <button key={s} onClick={() => setStatus(s)} style={{
            marginRight: "8px", padding: "6px 12px", borderRadius: "6px",
            border: "1px solid #ccc", cursor: "pointer"
          }}>
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
