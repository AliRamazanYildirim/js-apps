import { NavLink } from "react-router-dom";
import style from "../styles/Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  const items = [
    { name: "Home", to: "/", id: 1 },
    { name: "About Us", to: "/about-us", id: 2 },
    { name: "Contact Us", to: "/contact-us", id: 3 },
    { name: "Dashboard", to: "/dashboard", id: 4 },
    { name: "Blog", to: "/blog", id: 5 },
  ];

  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <NavLink
                to={item.to}
                className={({ isActive }) => clsx({ [style.active]: isActive })}
              >
                {item.name}
              </NavLink>

              {/* OR Inline */}
              {/* <NavLink
                to={item.to}
                className={style.navLink}
                style={({ isActive }) => ({
                  color: isActive ? "green" : "none",
                  borderBottom: isActive ? "2px solid red" : "none",
                })}
              >
                {item.name}
              </NavLink> */}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
