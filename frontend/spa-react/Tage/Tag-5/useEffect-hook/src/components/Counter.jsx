import { useState, useEffect } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    console.log("Rendered");

    useEffect(() => {
      console.log("Dieser Effekt wird jedes mal ausgeführt");
    });

    useEffect(() => {
      console.log("Dieser Effekt wird nur beim ersten Mal ausgeführt");
    }, []);

    useEffect(() => {
      console.log("Dieser Effekt wird nur ausgeführt, wenn input und count sich ändert");
    }, [name, count]);

  return (
    <div>Counter
        <p>{count}</p>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>Klick mich</button>
        <br />
        <input onChange={(e) => setName(e.target.value)} />
    </div>
  )
}

export default Counter