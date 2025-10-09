import React from "react";

function ItemList({ items }) {
  return (
    <div style={{ backgroundColor: "#000000ff", padding: "16px", borderRadius: "10px", margin: "12px 0" }}>
      {items.length > 0 ? (
        <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
          {items.map(item => (
            <li key={item.id} style={{ margin: "4px 0" }}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p style={{ color: "#919191ff", fontStyle: "italic" }}>Tidak ada item yang tersedia saat ini.</p>
      )}
    </div>
  );
}

export default ItemList;
