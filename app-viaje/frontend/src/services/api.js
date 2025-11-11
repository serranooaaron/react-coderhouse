import axios from "axios";
const API_URL = "http://localhost:8080";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const apiMethods = {
  // CRUD operaciones
  crearItems: async (item) => {
    const response = await api.post("/api/items", item);
    return response;
  },
  obtenerListaItems: async () => {
    const response = await api.get("/api/items");
    return response;
  },
  obtenerItem: async (id) => {
    const response = await api.get(`/api/items/${id}`);
    return response;
  },
  actualizarItem: async (id, item) => {
    const response = await api.put(`/api/items/${id}`, item);
    return response;
  },
  eliminarItem: async (id) => {
    const response = await api.delete(`/api/items/${id}`);
    return response;
  },
  obtenerItems: async () => {
    const response = await api.get("/api/items");
    return response;
  },
};

export default apiMethods;
