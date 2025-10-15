import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export default function UserActions() {
  const { user, login, logout, updateProfile } = useContext(UserContext);

  return (
    <div style={{ marginTop: "15px" }}>
      {!user.isLoggedIn ? (
        <button onClick={() => login("Xenaaa", "xenaggwp@example.com")}>Login</button>
      ) : (
        <>
          <button onClick={logout}>Logout</button>
          <button
            onClick={() => updateProfile("Updated", "new@example.com")}
          >
            Update Profile
          </button>
        </>
      )}
    </div>
  );
}
