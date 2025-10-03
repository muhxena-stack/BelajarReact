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

// =====================================================

import React from "react";
import Greeting from "./components/Greeting.jsx"; 
import ProductCard from "./components/ProductCard.jsx"; 
import Card from "./components/Card.jsx"; 
import Comment from "./components/Comment.jsx";



function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h3>Soal 1</h3>
      <Greeting name="Xena" />

      <h3>Soal 2</h3>
      <ProductCard productName="Laptop Acer" price={7000000} stock={7} isAvailable={true}/>
      <ProductCard productName="Mouse Logitech" price={299000} isAvailable={false}/>
    
      <h3>Soal 3</h3>
      <Card>
        <h2>Selamat Datang</h2>
        <p>Ini adalah card.</p>
      </Card>

      <Card>
        <img
          src="https://laptopmedia.com/wp-content/uploads/2024/08/5-6.jpg"
          alt="contoh gambar"
          style={{ width: "100%", borderRadius: "8px" }}
        />
        <p>laptop kelas menengah dengan performa kuat berkat prosesor AMD Ryzen 7 5700U, layar IPS 15,6 inci Full HD, SSD 512GB, dan RAM 8GB yang dapat ditingkatkan hingga 32GB. Keunggulannya termasuk desain minimalis, baterai tahan lama, port yang lengkap, kamera Full HD dengan privacy shutter, serta sistem operasi Windows 11 Home dan Microsoft Office Home & Student 2024. </p>
      </Card>

      <Card>
        <h3>Aksi</h3>
        <button onClick={() => alert("Tombol diklik!")}>Klik Saya</button>
      </Card>

      <h3>Soal 4</h3>
       <Comment
        author="Xena"
        text="Ini komentar pertama saya di React!"
        avatarUrl="src/assets/foto.jpg"
      />
      <Comment
        author="Xena"
        text="Manuasi perlu Banyak Benturan untuk Menjadi Kuat." 
        avatarUrl="src/assets/foto.jpg"
      />


    </div>      
  );
}

export default App;
