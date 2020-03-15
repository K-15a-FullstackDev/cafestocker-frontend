import api from "../api";

export async function listItems() {
  const { data } = await api.get("/items");
  return data;
}

export async function createItem(payload) {
  const { data } = await api.post("/items", payload);
  return data;
}

export async function updateItem(id, payload) {
  const { data } = await api.put(`/items/${id}`, payload);
  return data;
}

export async function deleteItem(id) {
  await api.delete(`/items/${id}`);
}
