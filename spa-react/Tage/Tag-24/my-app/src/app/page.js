'use client'

import { useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import useThemeStore from "./store/themeStore";
import UserTable from "./components/UserTable";

export default function Home() {
  const toggleDarkMode = useThemeStore(state => state.toggleDarkMode);
  const darkMode = useThemeStore(state => state.darkMode);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <div>
      <div className="header">
        <h1>{darkMode ? '' : ''}</h1>
        <button onClick={toggleDarkMode} style={{ fontSize: '24px', padding: '10px', cursor: 'pointer' }}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
        <UserTable />
    </div>
  );
}