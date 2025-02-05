import { useState } from "react";
import "./App.css";

function App() {
  const [position, setPosition] = useState(300);

  const moveBoxUp = () => {
    setPosition(position - 50);
  };

  return (
    <div className="App">
      <h1>Move the Box Up!</h1>
      <button onClick={moveBoxUp}>Move Up</button>
      <div
        className="box"
        style={{ transform: `translateY(${position}px)` }}
      ></div>
    </div>
  );
}

export default App;
