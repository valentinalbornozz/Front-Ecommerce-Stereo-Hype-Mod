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
import Products from "../pages/products";

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <ReactDomRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/collections/apparel" element={<Products />} />
        </ReactDomRoutes>

        <Footer />
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
