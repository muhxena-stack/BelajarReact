import React, { useReducer } from "react";

// Definisikan fungsi reducer
function counterReducer(state, action) {
  switch (action.type) {
    case "tambah":
      return { count: state.count + 1 };
    case "kurang":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export default function Counter() {
  // Inisialisasi state dengan useReducer
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  // UI komponen
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Soal 4</h1>
      <h2>Counter dengan useReducer</h2>
      <h1>{state.count}</h1>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => dispatch({ type: "tambah" })}>Tambah</button>
        <button onClick={() => dispatch({ type: "kurang" })} style={{ marginLeft: "10px" }}>
          Kurang
        </button>
        <button onClick={() => dispatch({ type: "reset" })} style={{ marginLeft: "10px" }}>
          Reset
        </button>
      </div>
    </div>
  );
}
