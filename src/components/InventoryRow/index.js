import React, { useState } from "react";

const InventoryRow = ({ item, onEditItem, onDeleteItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(item);

  const handleSave = () => {
    onEditItem(editedItem);
    setIsEditing(false);
  };

  return (
    <tr>
      <td className="border border-gray-300 px-4 py-2">
        {isEditing ? (
          <input
            type="text"
            value={editedItem.name}
            onChange={(e) => setEditedItem({ ...editedItem, name: e.target.value })}
            className="border rounded-lg px-2 py-1"
          />
        ) : (
          item.name
        )}
      </td>
      <td className="border border-gray-300 px-4 py-2">
        {isEditing ? (
          <input
            type="text"
            value={editedItem.category}
            onChange={(e) => setEditedItem({ ...editedItem, category: e.target.value })}
            className="border rounded-lg px-2 py-1"
          />
        ) : (
          item.category
        )}
      </td>
      <td className="border border-gray-300 px-4 py-2">
        {isEditing ? (
          <input
            type="number"
            value={editedItem.quantity}
            onChange={(e) => setEditedItem({ ...editedItem, quantity: Number(e.target.value) })}
            className="border rounded-lg px-2 py-1"
          />
        ) : (
          item.quantity
        )}
      </td>
      <td className="border border-gray-300 px-4 py-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white px-3 py-1 rounded-lg hover:bg-gray-600 transition ml-2"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition"
            >
              Edit
            </button>
            <button
              onClick={() => onDeleteItem(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition ml-2"
            >
              Delete
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default InventoryRow;
