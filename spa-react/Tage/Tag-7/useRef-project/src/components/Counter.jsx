import { useRef } from "react";

const Counter = () => {
    const countRef = useRef(0);

    const increment = () => {
        countRef.current += 1;
        console.log(countRef.current);
    };

    return <button onClick={increment}>Increment</button>;
};
export default Counter;