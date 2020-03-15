import React, { useEffect, useState } from "react";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import { listItems, deleteItem, updateItem } from "./services/items";

export default function App() {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);

  async function refresh() {
    const data = await listItems();
    setItems(data);
  }

  useEffect(() => {
    refresh();
  }, []);

  async function onDelete(id) {
    if (!window.confirm("Delete this item?")) return;
    await deleteItem(id);
    refresh();
  }

  async function onSaveEdit() {
    const { id, ...payload } = editing;
    await updateItem(id, {
      ...payload,
      quantity: Number(payload.quantity),
      threshold: Number(payload.threshold),
    });
    setEditing(null);
    refresh();
  }

  return (
    <div
      style={{ maxWidth: 720, margin: "2rem auto", fontFamily: "sans-serif" }}
    >
      <h1>CafeStocker</h1>
      <p>Inventory tracker</p>
      <hr />
      <ItemForm onCreated={() => refresh()} />

      {editing && (
        <div
          style={{ border: "1px solid #ddd", padding: 12, marginBottom: 16 }}
        >
          <h3>Edit Item</h3>
          <input
            value={editing.name}
            onChange={(e) => setEditing({ ...editing, name: e.target.value })}
          />
          <input
            value={editing.sku || ""}
            onChange={(e) => setEditing({ ...editing, sku: e.target.value })}
          />
          <input
            type="number"
            value={editing.quantity}
            onChange={(e) =>
              setEditing({ ...editing, quantity: e.target.value })
            }
          />
          <input
            type="number"
            value={editing.threshold}
            onChange={(e) =>
              setEditing({ ...editing, threshold: e.target.value })
            }
          />
          <input
            value={editing.unit}
            onChange={(e) => setEditing({ ...editing, unit: e.target.value })}
          />
          <div style={{ marginTop: 8 }}>
            <button onClick={onSaveEdit}>Save</button>
            <button onClick={() => setEditing(null)} style={{ marginLeft: 8 }}>
              Cancel
            </button>
          </div>
        </div>
      )}

      <ItemList items={items} onEdit={setEditing} onDelete={onDelete} />
    </div>
  );
}
