import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./theme/ThemeSlice";

const ThemeSwitcher = () => {
    const {mode} = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    return (
        <div className={`app ${mode}`}>
            <h1>Current Theme: {mode === 'light' ? '🌞 Light Mode' : '🌙 Dark Mode'}</h1>
            <button onClick={() => dispatch(toggleTheme())}>
                {mode === 'light' ? '🌙' : '☀️'}
            </button>
            </div>
    );
};

export default ThemeSwitcher;