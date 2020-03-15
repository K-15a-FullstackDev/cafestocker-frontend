import React, { useState } from "react";
import { createItem } from "../services/items";

export default function ItemForm({ onCreated }) {
  const [form, setForm] = useState({
    name: "",
    sku: "",
    quantity: 0,
    threshold: 0,
    unit: "units",
  });
  const [saving, setSaving] = useState(false);
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function onSubmit(e) {
    e.preventDefault();
    setSaving(true);
    try {
      const created = await createItem({
        name: form.name,
        sku: form.sku,
        quantity: Number(form.quantity),
        threshold: Number(form.threshold),
        unit: form.unit || "units",
      });
      onCreated && onCreated(created);
      setForm({ name: "", sku: "", quantity: 0, threshold: 0, unit: "units" });
    } catch (err) {
      alert("Create failed");
      console.error(err);
    } finally {
      setSaving(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{ display: "grid", gap: 8, marginBottom: 16 }}
    >
      <input
        name="name"
        placeholder="Item name"
        value={form.name}
        onChange={onChange}
        required
      />
      <input
        name="sku"
        placeholder="SKU"
        value={form.sku}
        onChange={onChange}
      />
      <input
        name="quantity"
        type="number"
        placeholder="Quantity"
        value={form.quantity}
        onChange={onChange}
      />
      <input
        name="threshold"
        type="number"
        placeholder="Low-stock threshold"
        value={form.threshold}
        onChange={onChange}
      />
      <input
        name="unit"
        placeholder="Unit (e.g., liters, kg)"
        value={form.unit}
        onChange={onChange}
      />
      <button disabled={saving}>{saving ? "Saving..." : "Add Item"}</button>
    </form>
  );
}
