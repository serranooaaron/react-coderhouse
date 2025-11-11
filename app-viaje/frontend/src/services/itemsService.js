import api from "./api.js";

const itemService = {
  crear: async (item) => {
    // Crear un nuevo item
    const response = await api.crearItems(item); // Llamar al método de la API para crear un item
    return response.data; // Devolver los datos de la respuesta
  },
  obtenerTodos: async () => {
    // Obtener todos los items
    const response = await api.obtenerListaItems(); // Llamar al método de la API para obtener la lista de items
    return response.data; // Devolver los datos de la respuesta
  },
  obtenerPorId: async (id) => {
    // Obtener un item por su ID
    const response = await api.obtenerItem(id); // Llamar al método de la API para obtener un item por su ID
    return response.data; // Devolver los datos de la respuesta
  },
  eliminar: async (id) => {
    // Eliminar un item
    const response = await api.eliminarItem(id); // Llamar al método de la API para eliminar un item
    return response.data; // Devolver los datos de la respuesta
  },

  actualizar: async (id, item) => {
    // Actualizar un item
    const response = await api.actualizarItem(id, item); // Llamar al método de la API para actualizar un item
    return response.data; // Devolver los datos de la respuesta
  },
};

export default itemService;
