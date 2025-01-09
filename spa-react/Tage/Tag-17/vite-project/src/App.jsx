import useThemeStore from "./store/useThemeStore";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const { mode } = useThemeStore();

  return (
    <div className={`app ${mode}`}>
      <ThemeSwitcher />
    </div>
  );
}

export default App;
