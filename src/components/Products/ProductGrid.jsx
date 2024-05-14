import products from "./productos";
import ProductCard from "./ProductCard";

const ProductsGrid = () => {
  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">APPAREL</h2>
      <div className="flex flex-wrap justify-center -m-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
