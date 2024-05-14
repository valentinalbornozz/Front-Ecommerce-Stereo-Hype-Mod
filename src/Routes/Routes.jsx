import {
  BrowserRouter,
  Navigate,
  Routes as ReactDomRoutes,
  Route,
} from "react-router-dom";
import Layout from "../components/layout/layout";

import Home from "../pages/home";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Home />
        <Footer />
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
