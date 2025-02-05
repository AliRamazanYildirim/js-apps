import { useEffect, useRef } from "react";

const App = () => {
    const inputRef = useRef(null);
    const btnRef = useRef(null);
    
    useEffect(() => {
      inputRef.current.focus();
      btnRef.current.addEventListener("click", () => {
        alert("Button clicked");
        inputRef.current.style.cssText = `background-color:#41bbd9; color:black;`;
      });
    }, []);
  return (
    <div>
        <input ref={inputRef} type="text" /><br />
        <button ref={btnRef}>Click</button>
    </div>
  );
}

export default App