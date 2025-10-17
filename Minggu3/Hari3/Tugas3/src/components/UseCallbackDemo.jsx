import React from "react";
import ParentWithoutCallback from "./ParentWithoutCallback";
import ParentWithCallback from "./ParentWithCallback";

export default function UseCallbackDemo() {
  return (
    <div style={{ display: "flex", gap: "40px", justifyContent: "center" }}>
      <ParentWithoutCallback />
      <ParentWithCallback />
    </div>
  );
}
