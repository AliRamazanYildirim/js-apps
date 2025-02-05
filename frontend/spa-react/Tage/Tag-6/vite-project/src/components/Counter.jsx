import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  return (
    <div>
      Counter
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} disabled={count <= 0}>
        Decrement
      </button>
      {count <= 0 && <p style={{color: 'red', fontWeight:'bold'}}>Der Zähler darf nicht kleiner als 0 sein</p>}
    </div>
  );
};

export default Counter;
