import { useState } from "react";
import products from "./ApparelData";
import SortComponent from "../ShortBy/SortBy";
import FilterComponent from "../Filter/FilterComponent";

const ApparelPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (filter) => {
    if (filter === "Hoodies") {
      const filtered = products.filter(
        (product) => product.category === "Hoodies"
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  const handleSortChange = (sortMethod) => {
    if (sortMethod === "priceLowHigh") {
      const sorted = [...products].sort((a, b) => a.price - b.price);
      setFilteredProducts(sorted);
    }
  };

  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-col md:flex-row justify-between items-center w-full p-4">
        <h2 className="text-black text-2xl lg:text-3xl font-bold mr-4">
          APPAREL
        </h2>
        <div className="md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <FilterComponent onFilterChange={handleFilterChange} />
          <SortComponent onSortChange={handleSortChange} />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 xl:gap-8 w-full">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group h-full flex flex-col bg-white border rounded-lg overflow-hidden shadow-lg"
          >
            <div className="bg-gray-100 flex-grow">
              <img
                src={product.imageUrl}
                loading="lazy"
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:opacity-75 transition duration-700 ease-in-out"
              />
            </div>
            <div className="flex flex-col p-4">
              <h3 className="text-gray-800 text-lg font-semibold">
                {product.name}
              </h3>
              <span
                className={`mt-1 text-xl font-bold ${
                  product.price === "SOLD OUT"
                    ? "text-red-500"
                    : "text-gray-800"
                }`}
              >
                {product.price}
              </span>
              <a
                href={product.link}
                className={`mt-4 text-center py-2 w-full ${
                  product.price === "SOLD OUT"
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-black text-white"
                } rounded-lg transition duration-300 ease-in-out`}
              >
                VIEW
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApparelPage;
