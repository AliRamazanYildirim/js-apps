import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./theme/ThemeSlice";

const ThemeSwitcher = () => {
    const theme = useSelector((state) => state.theme.value);
    const dispatch = useDispatch();

    return (
        <div className={`app ${theme}`}>
            <h1>Current Theme: {theme === 'light' ? '🌞 Light Mode' : '🌙 Dark Mode'}</h1>
            <button onClick={() => dispatch(toggleTheme())}>
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
            </div>
    );
};

export default ThemeSwitcher;