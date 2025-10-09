import React from "react";

function UserGreeting() {
  return (
    
    <div style={{
      backgroundColor: "#000000ff",
      color: "#00ffb7ff",
      padding: "12px",
      borderRadius: "8px",
      margin: "8px 0",
      fontWeight: "bold"
    }}>
      Selamat datang kembali!
    </div>
  );
}

function GuestGreeting() {
  return (
    <div style={{
      backgroundColor: "#000000ff",
      color: "#ff0000ff",
      padding: "12px",
      borderRadius: "8px",
      margin: "8px 0",
      fontWeight: "bold"
    }}>
      Silakan login terlebih dahulu.
    </div>
  );
}

function Greeting({ isLoggedIn }) {
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}

export default Greeting;
