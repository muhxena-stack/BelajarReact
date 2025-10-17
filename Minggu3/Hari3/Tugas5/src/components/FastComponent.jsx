import React from "react";

export default function FastComponent({ count }) {
  console.log(" FastComponent render");
  return <p>Nilai count: {count}</p>;
}
