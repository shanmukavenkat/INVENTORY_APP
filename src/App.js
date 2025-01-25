import React, { useState } from "react";
import InventoryForm from "./components/InventoryForm";
import FilterSortBar from "./components/FilterSortBar";
import InventoryTable from "./components/InventoryTable";


const App = () => {
  const [inventory, setInventory] = useState([
    { id: 1, name: "Laptop", category: "Electronics", quantity: 10 },
    { id: 2, name: "Apples", category: "Groceries", quantity: 20 },
  ]);
  const [filter, setFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleAddItem = (newItem) => {
    setInventory((prevInventory) => [
      ...prevInventory,
      { ...newItem, id: prevInventory.length + 1 },
    ]);
  };

  const handleEditItem = (editedItem) => {
    setInventory((prevInventory) =>
      prevInventory.map((item) =>
        item.id === editedItem.id ? { ...item, ...editedItem } : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    setInventory((prevInventory) => prevInventory.filter((item) => item.id !== id));
  };

  const categories = Array.from(new Set(inventory.map((item) => item.category)));

  return (
    <div className="p-6">
      <InventoryForm onAddItem={handleAddItem} />
      <FilterSortBar
        filter={filter}
        setFilter={setFilter}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        categories={categories}
      />
      <InventoryTable
        inventory={inventory}
        filter={filter}
        sortOrder={sortOrder}
        onEditItem={handleEditItem}
        onDeleteItem={handleDeleteItem}
      />
    </div>
  );
};

export default App;
