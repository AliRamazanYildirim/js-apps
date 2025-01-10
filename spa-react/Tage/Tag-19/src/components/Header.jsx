import useThemeStore from "../store/ThemeStore";

const Header = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <header className={theme === "dark" ? "dark-mode" : "light-mode"}>
      <button onClick={toggleTheme}>
        {theme === "light" ? "🌙 Switch to Dark Mode" : "☀️ Switch to Light Mode"}
      </button>
    </header>
  );
}

export default Header;
