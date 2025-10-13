import React from "react";
import Toolbar from "./component/Toolbar";

export default function App() {
  const user = { name: "Alice", theme: "dark" };

  return (
    <div>
      <h1>Soal 2</h1>
      <Toolbar user={user} />
    </div>
  );
}
