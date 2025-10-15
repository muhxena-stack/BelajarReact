import React, { useContext } from "react";
import CartContext from "../context/CartContext";

export default function ProductList() {
  const { addItem } = useContext(CartContext);

  const products = [
    { id: 1, name: "Kaos Polos", price: 75000 },
    { id: 2, name: "Celana Jeans", price: 150000 },
    { id: 3, name: "Jaket Hoodie", price: 200000 },
  ];

  return (
    <div>
      <h3>Daftar Produk</h3>
      {products.map((product) => (
        <div key={product.id} style={{ margin: "10px 0" }}>
          <strong>{product.name}</strong> - Rp {product.price.toLocaleString()}
          <button
            onClick={() => addItem(product)}
            style={{ marginLeft: "10px" }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
