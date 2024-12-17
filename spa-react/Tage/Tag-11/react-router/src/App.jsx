import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Layout from "./layout/Layout";
import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;
