import { useState } from "react";
import style from '../styles/Style.module.css'
const ColoredText = ({isHere}) => {
  const [newColor, setNewColor] = useState("");
  const updateColor = (e) => {
    setNewColor(e.target.value);
  }

  return (
    <>
      <input className={style.myInput}
        type="text" 
        placeholder="Text Color" 
        value={newColor} 
        onChange={updateColor} 
      />
      <p style={{color: newColor}}>This is a paragraph with a color.</p>
      <div className={isHere ? style.richtig : style.falsch}>Component</div>
    </>
  )
};

export default ColoredText;
