import React, { useState } from "react";

function EventHandler() {
    const [message, setMessage] = useState("Arahkan atau klik tombol di bawah");

    function handleClick() {
        setMessage("Tombol diklik!");
    }

    function handleMouseEnter() {
        setMessage("Mouse masuk ke tombol");
    }

    function handleMuoseLeave() {
        setMessage("Mouse keluar dari tombol");
    }

    return (
        <div style={{ textAlign: "center", marginTop: "20px"}}>
            <h1>Soal 1</h1>
            <h2>{message}</h2>
            <button 
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMuoseLeave}
            style={{
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "5px",
                cursor: "pointer",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
            }}>
                Klik Saya
            </button>
        </div>
    );
}

export default EventHandler;