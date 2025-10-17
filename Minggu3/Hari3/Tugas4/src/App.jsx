import React, { useState, Suspense, lazy } from "react";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

export default function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Soal 4 Code Splitting & Lazy Loading</h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
        <button onClick={() => setPage("contact")}>Contact</button>
      </div>

      {/* Suspense digunakan agar menampilkan fallback saat loading */}
      <Suspense fallback={<p>⏳ Memuat halaman...</p>}>
        {renderPage()}
      </Suspense>
    </div>
  );
}
