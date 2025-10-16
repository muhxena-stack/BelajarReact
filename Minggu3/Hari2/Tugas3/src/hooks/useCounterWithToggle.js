import useCounter from "./useCounter";
import useToggle from "./useToggle";

export default function useCounterWithToggle() {
  const counter = useCounter(0);
  const toggle = useToggle(false);

  return { ...counter, ...toggle };
}
