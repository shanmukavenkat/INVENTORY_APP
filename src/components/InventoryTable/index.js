import React from "react";
import InventoryRow from "../InventoryRow";

const InventoryTable = ({ inventory, filter, sortOrder, onEditItem, onDeleteItem }) => {
  const filteredInventory = filter
    ? inventory.filter((item) => item.category === filter)
    : inventory;

  const sortedInventory = [...filteredInventory].sort((a, b) =>
    sortOrder === "asc" ? a.quantity - b.quantity : b.quantity - a.quantity
  );

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2">Name</th>
          <th className="border border-gray-300 px-4 py-2">Category</th>
          <th className="border border-gray-300 px-4 py-2">Quantity</th>
          <th className="border border-gray-300 px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {sortedInventory.map((item) => (
          <InventoryRow
            key={item.id}
            item={item}
            onEditItem={onEditItem}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </tbody>
    </table>
  );
};

export default InventoryTable;
