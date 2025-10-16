import { useState } from "react";

export default function useToggle(initialState = false) {
  const [isActive, setIsActive] = useState(initialState);

  const toggle = () => setIsActive((prev) => !prev);

  return { isActive, toggle };
}
