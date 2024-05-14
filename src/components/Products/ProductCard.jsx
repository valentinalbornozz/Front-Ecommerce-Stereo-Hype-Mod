import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card border w-60 h-auto m-2 bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center relative">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-50 object-cover"
      />
      <a href={product.link} className="view-button">
        VIEW
      </a>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p
          className={`text-md font-semibold ${
            product.price === "SOLD OUT" ? "text-red-500" : "text-black"
          }`}
        >
          {product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
