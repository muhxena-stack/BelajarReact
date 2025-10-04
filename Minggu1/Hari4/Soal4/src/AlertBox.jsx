import React from "react";
import styled from "styled-components";

// 🔹 Komponen utama alert box
const Box = styled.div`
  padding: 16px 20px;
  border-radius: 14px;
  margin: 12px 0;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 320px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(6px);
  transition: all 0.3s ease;

  /* Warna dinamis tergantung props */
  background: ${(props) =>
    props.type === "error"
      ? "linear-gradient(135deg, #ef4444, #b91c1c)"
      : "linear-gradient(135deg, #22c55e, #15803d)"};

  /* Efek glow dinamis */
  box-shadow: ${(props) =>
    props.type === "error"
      ? "0 0 18px rgba(239,68,68,0.6)"
      : "0 0 18px rgba(34,197,94,0.6)"};

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: ${(props) =>
      props.type === "error"
        ? "0 0 25px rgba(239,68,68,0.8)"
        : "0 0 25px rgba(34,197,94,0.8)"};
  }
`;

// 🔹 Ikon di kiri
const Icon = styled.span`
  font-size: 22px;
`;

// 🔹 Pesan teks
const Message = styled.span`
  flex: 1;
`;

export default function AlertBox({ type = "success", message }) {
  return (
    <Box type={type}>
      <Icon>{type === "error" ? "❌" : "✅"}</Icon>
      <Message>{message}</Message>
    </Box>
  );
}
