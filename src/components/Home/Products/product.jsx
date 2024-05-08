import { useState } from "react";
import products from "./Products";

const Producto = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
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
                {product.sizes && product.sizes.length > 0 && (
                  <select className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
                    {product.sizes.map((size, index) => (
                      <option key={index}>{size}</option>
                    ))}
                  </select>
                )}
                <div className="p-4 flex justify-between items-center">
                  <div>
                    <button
                      className=" bg-gray-800 text-white py-2 px-4 rounded-md"
                      onClick={decrementQuantity}
                    >
                      -
                    </button>
                    <span className="mx-2">{quantity}</span>
                    <button
                      className="bg-gray-800 text-white py-2 px-4 rounded-md"
                      onClick={incrementQuantity}
                    >
                      +
                    </button>
                  </div>
                </div>
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
