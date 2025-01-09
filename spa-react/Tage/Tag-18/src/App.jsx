import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Login from './components/Login';
import ProductList from './components/ProductList';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Header />
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <Login />
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;