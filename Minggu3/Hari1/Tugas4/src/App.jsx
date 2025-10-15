import React from "react";
import UserProvider from "./context/UserProvider";
import UserProfile from "./components/UserProfile";

export default function App() {
  return (
    <UserProvider>
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h2>Soal 4 Custom Hook untuk Context</h2>
        <UserProfile />
      </div>
    </UserProvider>
  );
}
