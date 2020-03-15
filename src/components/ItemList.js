import React from "react";

export default function ItemList({ items, onEdit, onDelete }) {
  if (!items.length) return <p>No items yet.</p>;
  return (
    <table width="100%" cellPadding="8" style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th align="left">Name</th>
          <th align="left">SKU</th>
          <th align="right">Qty</th>
          <th align="right">Thresh</th>
          <th align="left">Unit</th>
          <th align="left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((it) => {
          const low = it.threshold > 0 && it.quantity <= it.threshold;
          return (
            <tr
              key={it.id}
              style={{ background: low ? "#fff3f3" : "transparent" }}
            >
              <td>{it.name}</td>
              <td>{it.sku || "-"}</td>
              <td align="right">{it.quantity}</td>
              <td align="right">{it.threshold}</td>
              <td>{it.unit}</td>
              <td>
                <button onClick={() => onEdit(it)}>Edit</button>
                <button
                  onClick={() => onDelete(it.id)}
                  style={{ marginLeft: 8 }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
