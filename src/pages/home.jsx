import Hero from "../components/Home/Hero/Hero";
import NewsletterForm from "../components/Home/Newsletter/Newsletter";
import Producto from "../components/Home/Products/product";
import Taxes from "../components/Home/Taxes/International-Taxes";

const Home = () => {
  return (
    <>
      <Hero />
      <Producto />
      <Taxes />
      <NewsletterForm />
    </>
  );
};

export default Home;
