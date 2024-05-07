import {
  BrowserRouter,
  Navigate,
  Routes as ReactDomRoutes,
  Route,
} from "react-router-dom";
import Layout from "../components/layout/layout";
import Header from "../components/header/header";
import Home from "../pages/home";
const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Home />
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
