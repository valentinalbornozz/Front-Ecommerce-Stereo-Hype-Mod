import { useState } from "react";

const FilterComponent = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filters = [
    { value: "all", label: "All" },
    { value: "essentials", label: "Essential" },
    { value: "hoodies", label: "Hoodies" },
    { value: "miami", label: "Miami" },
    { value: "new york", label: "New York" },
    { value: "no sleep gang", label: "NO SLEEP GANG" },
    { value: "t-shirts", label: "T-shirts" },
  ];

  const handleFilterChange = (event) => {
    const selectedFilterMethod = event.target.value;
    setSelectedFilter(selectedFilterMethod);
    onFilterChange(selectedFilterMethod);
  };

  return (
    <div className="w-full md:w-56 flex justify-center align-center flex-col">
      <div htmlFor="filter-by" className="text-xl font-bold mb-4">
        FILTER BY
      </div>
      <select
        id="filter-by"
        value={selectedFilter}
        onChange={handleFilterChange}
        className="w-full p-2 border rounded-lg cursor-pointer"
      >
        {filters.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterComponent;
