import useAuthStore from "../store/useAuthStore";
import useThemeStore from "../store/useThemeStore";

const Header = () => {
  const { user, logout } = useAuthStore();
  const { mode, toggleTheme } = useThemeStore();

  return (
    <header className={`header ${mode}`}>
      <h1>E-Commerce Platform</h1>
      <button onClick={toggleTheme}>
        {mode == "light" ? "Dark Mode" : "Light Mode"}
      </button>
      {user ? (
        <>
          <p>Welcome, {user.name}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Please log in</p>
      )}
    </header>
  );
};

export default Header;
