import { useContext } from "react";
import UserContext from "./UserContext";

export default function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext harus digunakan di dalam UserProvider!");
  }

  return context;
}
