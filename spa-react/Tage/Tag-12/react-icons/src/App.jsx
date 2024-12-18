import { Route, Routes } from "react-router-dom";
import "./App.css";
import routes from "./routes/Routes";
import Layout from "./layout/Layout";


const App = () => {
  return (
    <Layout>
      <Routes>
      {routes.map((route) => (
          <Route key={route.path} {...route}>
            {route.children &&
              route.children.map((child) => (
                <Route key={child.path} {...child} />
              ))}
          </Route>
        ))}
      </Routes>
    </Layout>
  );
};


export default App;
