import React from "react";

function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 75 },
    { id: 4, name: "Monitor", price: 300 },
  ];

  return (
    <div style={{ backgroundColor: "#000000ff", padding: "16px", borderRadius: "10px", margin: "12px 0" }}>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
        {products.map(p => (
          <li key={p.id} style={{ margin: "4px 0" }}>{p.name} - ${p.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
