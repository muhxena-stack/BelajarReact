import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserCard from "./components/UserCard";
import ProductList from "./components/ProductList";
import Form from "./components/Form";
import AdvancedPatterns from "./components/AdvancedPatterns";
import { AppProvider } from "./context/AppContext";
import ContextExample from "./components/ContextExample";
import Home from "./pages/Home";
import About from "./pages/About";

const App: React.FC = () => {
  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
  ];

  return (
    <AppProvider>
      <Router>
        <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
          <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
            Project Gabungan React + TypeScript (Soal 1–4)
          </h2>

          <nav style={{ marginBottom: "2rem", display: "flex", gap: "1rem" }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* Soal 2 */}
                  <section style={{ marginBottom: "3rem" }}>
                    <h2>Soal 2 – Type-Safe Components</h2>
                    <div
                      style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
                    >
                      <UserCard name="Badu" age={21} isMember={true} />
                      <UserCard name="Xena" age={19} isMember={false} />
                    </div>

                    <ProductList products={products} />
                    <Form />
                  </section>

                  {/* Soal 3 */}
                  <section style={{ marginBottom: "3rem" }}>
                    <h2>Soal 3 – Advanced TypeScript Patterns</h2>
                    <AdvancedPatterns />
                  </section>

                  {/* Soal 4 */}
                  <section>
                    <h2>Soal 4 – TypeScript Integration</h2>
                    <ContextExample />
                  </section>
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
