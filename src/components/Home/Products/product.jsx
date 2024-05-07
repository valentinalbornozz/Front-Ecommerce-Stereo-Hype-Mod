import products from "./Products";

const Producto = () => {
  return (
    <div id="productos" className="py-5 bg-gray-100">
      <h2 className="text-center mb-4 text-2xl font-bold text-gray-800">
        Productos destacados
      </h2>
      <div className="flex flex-wrap justify-center items-center">
        {products.map((product) => (
          <div key={product.id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-yellow-400 p-4">
                <h3 className="text-lg font-bold text-gray-800 hover:underline cursor-pointer">
                  {product.name}
                </h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full object-cover"
              />
              <div className="p-4">
                <button className="bg-red-500 text-white py-2 px-4 rounded-md w-full">
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Producto;
