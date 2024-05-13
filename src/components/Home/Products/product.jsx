import { useState } from "react";
import products from "./Products";
import "./Products.css";

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
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-image-container">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="product-image"
              />
            </div>
            <div className="product-info">
              <div className="product-details">
                <div className="product-title">
                  <a href="#" className="product-name">
                    {product.name}
                  </a>
                </div>

                <p className="product-price">{product.price}</p>
                <p>
                  <a href="#" className="shipping-link">
                    Shipping
                  </a>{" "}
                  calculated at checkout.
                </p>
                <div className="size-quantity-container">
                  {product.sizes && product.sizes.length > 0 && (
                    <div className="size-selector">
                      <label htmlFor={`size-select-${product.id}`}>Size</label>
                      <select
                        id={`size-select-${product.id}`}
                        className="product-sizes"
                      >
                        {product.sizes.map((size) => (
                          <option key={size}>{size}</option>
                        ))}
                      </select>
                    </div>
                  )}
                  <div className="quantity-selector">
                    <label htmlFor={`quantity-select-${product.id}`}>
                      Quantity
                    </label>
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
                  </div>
                  <button className="add-to-cart-button">ADD TO CART</button>
                </div>
              </div>
              <a href="#" className="full-details-link">
                Full Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Producto;
