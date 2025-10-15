import React, { useContext } from "react";
import CartContext from "../context/CartContext";

export default function CartDisplay() {
  const { cart, total, removeItem, clearCart } = useContext(CartContext);

  return (
    <div style={{ marginTop: "30px" }}>
      <h3>Keranjang Belanja</h3>
      {cart.length === 0 ? (
        <p>Keranjang masih kosong.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} (x{item.quantity}) - Rp{" "}
                {(item.price * item.quantity).toLocaleString()}
                <button
                  onClick={() => removeItem(item.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Hapus
                </button>
              </li>
            ))}
          </ul>
          <p>
            <strong>Total:</strong> Rp {total.toLocaleString()}
          </p>
          <button onClick={clearCart}>Kosongkan Keranjang</button>
        </>
      )}
    </div>
  );
}
