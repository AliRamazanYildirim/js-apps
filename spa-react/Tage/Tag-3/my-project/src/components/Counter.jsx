import { useState } from "react";

const Counter = () => {
  //BEISPIEL-1
  const [count, setCount] = useState(0);
  const handleDecrement = () => {
    if (count > 0) {
      // setCount(count - 1);
      setCount((prevCount) => prevCount - 1);
    }
  };
  console.log("Counter rendered");

  //BEISPIEL-2
  const [istTrue, setIstTrue] = useState(true);

  
return (
    <div>
        {/*BEISPIEL-1*/}
        Counter
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>

        {/*BEISPIEL-2*/}
        <p className={istTrue ? "green" : "red"}>{istTrue.toString()}</p>
        <button onClick={() => setIstTrue(!istTrue)}>Toggle</button>
    </div>
);
};

export default Counter;
