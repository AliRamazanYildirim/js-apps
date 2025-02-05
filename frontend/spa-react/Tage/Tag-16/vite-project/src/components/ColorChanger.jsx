import { useState } from 'react';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ColorChanger = () => {
  const [color, setColor] = useState('#FFFFFF');

  const changeColor = () => {
    setColor(getRandomColor());
  };

  return (
    <div style={{ backgroundColor: color, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button onClick={changeColor} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Farbe ändern
      </button>
    </div>
  );
};

export default ColorChanger;