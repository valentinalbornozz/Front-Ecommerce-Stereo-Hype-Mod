import { useState } from "react";
import products from "./Products";
import "./Products.css";
// Agrega un estado inicial para manejar las cantidades de cada producto
const initialQuantities = products.reduce((acc, product) => {
  acc[product.id] = 1;
  return acc;
}, {});

const Producto = () => {
  const [quantities, setQuantities] = useState(initialQuantities);

  const incrementQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const decrementQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1,
    }));
  };

  return (
    <div id="productos" className="productos page-width">
      <h2 className="title">Productos destacados</h2>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              {product.sizes && product.sizes.length > 0 && (
                <select className="product-sizes">
                  {product.sizes.map((size, index) => (
                    <option key={index}>{size}</option>
                  ))}
                </select>
              )}
              <div className="quantity-controls">
                <button
                  className="decrement-button"
                  onClick={() => decrementQuantity(product.id)}
                >
                  -
                </button>
                <span className="quantity">{quantities[product.id]}</span>
                <button
                  className="increment-button"
                  onClick={() => incrementQuantity(product.id)}
                >
                  +
                </button>
              </div>
              <button className="add-to-cart-button">Agregar al carrito</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Producto;
