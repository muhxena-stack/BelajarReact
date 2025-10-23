import React from "react";
import { useAppContext } from "../context/AppContext";

const ContextExample: React.FC = () => {
  const { username, setUsername } = useAppContext();

  return (
    <div>
      <p>Halo, {username}!</p>
      <button onClick={() => setUsername("BungXena")}>
        Ubah Nama
      </button>
    </div>
  );
};

export default ContextExample;
