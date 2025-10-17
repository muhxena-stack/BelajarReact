import React from "react";

export default function SlowComponent({ count }) {
  console.log(" SlowComponent render (loop besar)");

  // Simulasi proses berat
  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += i;
  }

  return <p>Proses berat selesai untuk count: {count}</p>;
}
