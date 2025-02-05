import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import HomePage from "../components/HomePage";
import NotFoundPage from "../components/NotFoundPage";
import Dashboard from "../components/Dashboard";
import Profile from "../components/Profile";
import Settings from "../components/Settings";

const routes = [
  { path: "/", name: "Home", Component: HomePage },
  { path: "/about-us", name: "About", Component: AboutUs },
  { path: "/contact-us", name: "Contact", Component: ContactUs },
  { path: "/dashboard", name: "Dashboard", Component: Dashboard,
    children: [
      { path: "profile", name: "Stats", Component: Profile },
      { path: "settings", name: "Settings", Component: Settings },
    ], },
  { path: "*", name: "NotFoundPage", Component: NotFoundPage },
];
export default routes;