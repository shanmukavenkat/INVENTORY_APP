import React, { useState } from "react";

const InventoryForm = ({ onAddItem }) => {
  const [newItem, setNewItem] = useState({ name: "", category: "", quantity: "" });

  const handleAdd = () => {
    if (!newItem.name || !newItem.category || newItem.quantity === "") return;
    onAddItem({ ...newItem, quantity: Number(newItem.quantity) });
    setNewItem({ name: "", category: "", quantity: "" });
  };

  return (
    <div className="mb-6 flex flex-col gap-4">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Item Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          className="border rounded-lg px-4 py-2 w-full"
        />
        <input
          type="text"
          placeholder="Category"
          value={newItem.category}
          onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
          className="border rounded-lg px-4 py-2 w-full"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
          className="border rounded-lg px-4 py-2 w-full"
        />
      </div>
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Add Item
      </button>
    </div>
  );
};

export default InventoryForm;
