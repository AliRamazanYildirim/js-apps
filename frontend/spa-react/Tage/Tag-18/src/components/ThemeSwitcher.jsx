import useThemeStore from "../store/useThemeStore";

const ThemeSwitcher = () => {
    const { mode, toggleTheme } = useThemeStore(); 

    return (
        <div className={`app ${mode}`}>
            <h1>Current Theme: {mode === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}</h1>
            <button onClick={toggleTheme}> 
                {mode === "light" ? "🌙 Switch to Dark Mode" : "☀️ Switch to Light Mode"}
            </button>
        </div>
    );
};

export default ThemeSwitcher;
