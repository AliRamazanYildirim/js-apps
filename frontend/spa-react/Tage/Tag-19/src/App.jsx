import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header";
import useThemeStore from "./store/ThemeStore";

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-mode" : "light-mode";
  }, [theme]);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
