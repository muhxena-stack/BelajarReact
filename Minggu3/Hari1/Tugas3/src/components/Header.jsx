import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import NotificationContext from "../context/NotificationContext";

export default function Header() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { count, addNotification, clearNotifications } = useContext(NotificationContext);

  const text = language === "id" ? "Bahasa Indonesia" : "English";

  return (
    <div
      style={{
        backgroundColor: "#000000ff",
        padding: "20px",
        borderRadius: "10px",
        display: "inline-block",
      }}
    >
      <h3>Header</h3>
      <p>Bahasa: {text}</p>
      <p>Notifikasi: {count}</p>

      <button onClick={toggleLanguage}>Ganti Bahasa</button>
      <button onClick={addNotification}>Tambah Notifikasi</button>
      <button onClick={clearNotifications}>Hapus</button>
    </div>
  );
}
