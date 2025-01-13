import { useContext } from "react";
import { NumberContext } from "./NumberProvider";

const Content = () => {
  const { number, dispatch } = useContext(NumberContext);

  return (
    <div>
      <h1>Number: {number}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Content;