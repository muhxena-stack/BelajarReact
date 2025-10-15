import React from "react";
import UserProvider from "./context/UserProvider";
import UserInfo from "./components/UserInfo";
import UserActions from "./components/UserActions";

export default function App() {
  return (
    <UserProvider>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Soal 2 Context Provider Sederhana</h2>
        <UserInfo />
        <UserActions />
      </div>
    </UserProvider>
  );
}
