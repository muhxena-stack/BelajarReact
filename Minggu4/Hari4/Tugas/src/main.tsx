import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// ambil elemen <div id="root"> dari index.html
const rootElement = document.getElementById("root") as HTMLElement;

// render React ke #root
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
