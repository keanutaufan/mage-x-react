import { useState } from "react";

export default function CounterV2() {
  const [count, setCount] = useState(0);

  function handleMinus() {
    setCount(prev => prev - 1);
  }

  function handlePlus() {
    setCount(prev => prev + 1);
  }

  return (
    <div>
      <button onClick={handleMinus}>-</button>
      <b>{count}</b>
      <button onClick={handlePlus}>+</button>
    </div>
  );
}