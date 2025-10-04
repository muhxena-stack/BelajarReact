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

// ================================================================================

import React, { useState, useEffect } from 'react';
import './App.css'; 

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

function App() {
  const width = useWindowWidth();
  const isMobile = width < 768;

  return (
    <div className="container">
      <h1>Ukuran Layar Anda: {width}px</h1>
      {isMobile ? (
        <p> Anda sedang melihat di perangkat mobile.</p>
      ) : (
        <p> Anda sedang melihat di perangkat desktop/tablet.</p>
      )}

      <div
        style={{
          backgroundColor: isMobile ? 'red' : 'black',
          color: 'white',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        Konten ini berubah berdasarkan lebar layar.
      </div>
    </div>
  );
}

export default App;
