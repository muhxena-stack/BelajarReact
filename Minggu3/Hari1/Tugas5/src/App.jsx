import React from "react";
import { CartProvider } from "./context/CartContext";
import ProductList from "./components/ProductList";
import CartDisplay from "./components/CartDisplay";

export default function App() {
  return (
    <CartProvider>
      <div style={{ textAlign: "center", padding: "30px" }}>
        <h2>Soal 5 Shopping Cart dengan Context API</h2>
        <ProductList />
        <CartDisplay />
      </div>
    </CartProvider>
  );
}
