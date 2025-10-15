// src/contexts/UserProvider.jsx
import React, { useState } from "react";
import UserContext from "../context/UserContext";

export default function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Guest",
    email: "",
    isLoggedIn: false,
  });

  const login = (name, email) => {
    setUser({ name, email, isLoggedIn: true });
  };

  const logout = () => {
    setUser({ name: "Guest", email: "", isLoggedIn: false });
  };

  const updateProfile = (newName, newEmail) => {
    setUser((prev) => ({ ...prev, name: newName, email: newEmail }));
  };

  const contextValue = { user, login, logout, updateProfile };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
}
