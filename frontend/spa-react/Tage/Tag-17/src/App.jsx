import { useState } from 'react';
import { UseContentComponent, MyComponent } from './components/UseContentComponent';

const App = () => {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const inc = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const switchDarkMode = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
    console.log('Dark Mode:', isDarkMode);
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={inc}>increment</button>
      <button onClick={switchDarkMode}>Switch Dark Mode</button>
      <UseContentComponent>
        <MyComponent />
      </UseContentComponent>
    </>
  );
};

export default App;