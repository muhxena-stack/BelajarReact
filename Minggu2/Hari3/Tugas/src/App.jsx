import React, { useState } from "react";
import MyComponents from "./components/MyComponents";
import UserProfile from "./components/UserProfile";
import WindowSizeTracker from "./components/WindowSizeTracker";
import DualEffectExample from "./components/DualEffectExample";
import DataFetcher from "./components/DataFetcher";


export default function App() {
    const [id, setId] = useState(1);

  return (
    <div> 
      {/* Soal1 */}
      <MyComponents />
      {/* Soal2 */}
      <UserProfile userId={id} />
      <button onClick={() => setId((prev) => (prev < 10 ? prev + 1 : 1))}>
        Ganti User ID
      </button>
      {/* Soal3 */}
      <WindowSizeTracker />
      {/* Soal4 */}
      <DualEffectExample />
      {/* Soal5 */}
      <DataFetcher />
    </div>
  );
}

