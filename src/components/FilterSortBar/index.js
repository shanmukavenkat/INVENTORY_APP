import React from "react";

const FilterSortBar = ({ filter, setFilter, sortOrder, setSortOrder, categories }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <select
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
        className="border rounded-lg px-4 py-2"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
      >
        Sort by Quantity ({sortOrder === "asc" ? "Ascending" : "Descending"})
      </button>
    </div>
  );
};

export default FilterSortBar;
