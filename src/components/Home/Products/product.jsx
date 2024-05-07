import products from "./Products";

const Producto = () => {
  return (
    <div id="productos" className="py-5">
      <h2 className="text-center mb-4 text-2xl font-bold">
        Productos destacados
      </h2>
      <div className="flex flex-wrap justify-center items-center">
        {products.map((product) => (
          <div key={product.id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-4">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full mb-4"
              />
              <h3 className="text-yellow-500 text-xl font-bold mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600">{product.price}</p>
              <button className="bg-red-500 text-white py-2 px-4 rounded-md w-full mt-4">
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Producto;
