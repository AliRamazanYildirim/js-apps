import { Link } from "react-router-dom";
import "../styles/Navigation.module.css";
import About from "./About";
import Dashboard from "./Dashboard";
const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" element={<Home />}>Home</Link>
          </li>
          <li>
            <Link to="/about" element={<About />}>About</Link>
          </li>
          <li>
            <Link to="/dashboard" element={<Dashboard />}>Dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
