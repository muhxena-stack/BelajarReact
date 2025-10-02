// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// ================================================


// src/App.jsx
import React from "react";
import ProfileCard from "./components/ProfileCard"; // import soal 1
import ExpressionDemo from "./components/ExpressionDemo"; // import soal 2
import ConditionalDemo from "./components/ConditionalDemo"; // import soal 3
import ListDemo from "./components/ListDemo"; // import soal 4

function App() {
  return (
    <div style={{ padding: "20px" }}>
      {/* Soal 1 */}
      <h1 style={{ textAlign: "center" }}>Soal 1: ProfileCard</h1>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <ProfileCard
          name="Muhammad Xena Revanda"
          photo="src/assets/foto.jpg"
          bio="Seorang programmer pemula yang belajar untuk menjadi seorang web developer yang handal."
          skills={["Html", "Css", "Javascript", "React Js"]}
        />
      </div>

      {/* Soal 2 */}
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>Soal 2: JavaScript Expressions</h1>
      <ExpressionDemo />

      {/* Soal 3 */}
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>Soal 3: Conditional Rendering</h1>
      <ConditionalDemo />

      {/* Soal 4 */}
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>Soal 4: Render Array Data</h1>
      <ListDemo />
    </div>
  );
}

export default App;







