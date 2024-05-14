import { useState } from "react";
import products from "./Products";
import "./Products.css";
import { TfiPlus, TfiMinus } from "react-icons/tfi";

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
              <a href="/#">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="product-image"
                />
              </a>
            </div>
            <div className="product-info">
              <div className="product-details">
                <div className="product-title">
                  <a href="#" className="product-name">
                    {product.name}
                  </a>
                </div>

                <p className="product-price">{product.price}</p>
                <p className="shipping">
                  <a href="#" className="shipping-link">
                    Shipping
                  </a>{" "}
                  calculated at checkout.
                </p>
              </div>
              <hr className="hr" />
              <div className="size-quantity-container">
                {product.sizes && product.sizes.length > 0 ? (
                  <div className="size-selector">
                    <label htmlFor={`size-select-${product.id}`}>Size</label>
                    <select
                      id={`size-select-${product.id}`}
                      className="size-input product-sizes"
                    >
                      {product.sizes.map((size) => (
                        <option key={size} className="option">
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div className="no-size"></div> // Contenedor vacío para mantener el diseño
                )}
                <div className="quantity-selector">
                  <label htmlFor={`quantity-select-${product.id}`}>
                    Quantity
                  </label>
                  <div className="quantity-controls">
                    <button
                      className="decrement-button minus"
                      onClick={() => decrementQuantity(product.id)}
                    >
                      <TfiMinus />
                    </button>
                    <span className="quantity">{quantities[product.id]}</span>
                    <button
                      className="increment-button plus"
                      onClick={() => incrementQuantity(product.id)}
                    >
                      <TfiPlus />
                    </button>
                  </div>
                </div>
                <div className="product-form__item product-form__item--submit">
                  <button className="btn btn--full product-form__cart-submit">
                    <span> ADD TO CART </span>
                  </button>
                </div>
              </div>
              <div className="full-details">
                <a href="#" className="full-details-link">
                  Full Details <span>→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Producto;
