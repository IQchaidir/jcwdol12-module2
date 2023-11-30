"use client";

import { useState } from "react";

export default function Alert() {
  const [counter, setCounter] = useState(1);

  return (
    <button
      onClick={() => {
        alert(counter);
        setCounter(counter + 1);
      }}
    >
      trigger alert
    </button>
  );
}
