import { useState } from "react";

const SortComponent = ({ onSortChange }) => {
  const [sortMethod, setSortMethod] = useState("featured");

  const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "bestSelling", label: "Best selling" },
    { value: "alphaAsc", label: "Alphabetically, A-Z" },
    { value: "alphaDesc", label: "Alphabetically, Z-A" },
    { value: "priceLowHigh", label: "Price, low to high" },
    { value: "priceHighLow", label: "Price, high to low" },
    { value: "dateOldNew", label: "Date, old to new" },
    { value: "dateNewOld", label: "Date, new to old" },
  ];

  const handleSortChange = (event) => {
    const selectedSortMethod = event.target.value;
    setSortMethod(selectedSortMethod);
    onSortChange(selectedSortMethod);
  };

  return (
    <div className="w-full md:w-56 flex justify-center align-center flex-col">
      <label htmlFor="sort-by" className="text-xl font-bold mb-4">
        SORT BY
      </label>
      <select
        id="sort-by"
        value={sortMethod}
        onChange={handleSortChange}
        className="w-full p-2 border rounded-lg cursor-pointer"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortComponent;
