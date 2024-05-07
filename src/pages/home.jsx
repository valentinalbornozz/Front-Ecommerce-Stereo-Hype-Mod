import HomeSlider from "../components/home/Slider/HomeSlider";

const Home = () => {
  return (
    <div>
      <main>
        <HomeSlider />

        <div className="container mx-auto mt-8">
          <h1 className="text-4xl font-bold text-center mb-4">
            ¡Bienvenido a nuestra tienda!
          </h1>
          <p className="text-lg text-center">
            Explora nuestra amplia selección de productos y encuentra lo que
            necesitas.
          </p>
        </div>
      </main>
      <footer>{/* Aquí va tu pie de página */}</footer>
    </div>
  );
};

export default Home;
