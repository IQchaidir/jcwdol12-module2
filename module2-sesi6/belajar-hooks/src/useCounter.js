import { useState } from "react";

export default function useCounter(defaultValue = 0) {
  const [counter, setCounter] = useState(defaultValue);

  const increment = () => setCounter((prev) => prev + 1);

  const decrement = () => setCounter((prev) => prev - 1);

  return {
    counter,
    increment,
    decrement,
  };
}
