import { useState, useEffect } from "react";
import ItemList from "./ItemList.jsx";
import styles from "../../styles/itemListContainer.module.css";
import mcqueen from "../../assets/Rayo_McQueen.png";
// import dataItems from "../assets/dataItems.json"; ## Se utilizaba para simular un fetch de datos
import itemsService from "../../services/itemsService.js";

const ItemListContainer = ({ searchTerm = "", greeting }) => {
  const [items, setItems] = useState([]); // Estado para los items
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado para errores
  const [isInitialLoad, setIsInitialLoad] = useState(true); // Para controlar la carga inicial

  const CargarItems = async (isInitial = false) => {
    try {
      // Solo mostrar loading en la carga inicial
      if (isInitial) {
        setLoading(true);
      }

      const data = await itemsService.obtenerTodos();

      if (!data || !Array.isArray(data)) {
        throw new Error("Los datos recibidos no tienen el formato esperado");
      }

      const nuevosItems = data.map((item) => ({
        ...item,
        imageUrl: mcqueen,
      }));

      // Comparar si hay cambios reales antes de actualizar el estado
      setItems((prevItems) => {
        const hayCambios =
          JSON.stringify(prevItems) !== JSON.stringify(nuevosItems); // Comparación simple de objetos
        // Json  transforma los objetos en strings para compararlos y evitar referencias
        return hayCambios ? nuevosItems : prevItems;
      });

      if (isInitial) {
        setError(null);
      }
    } catch (error) {
      if (isInitial) {
        setError(`Error al cargar los productos: ${error.message}`);
      }
    } finally {
      if (isInitial) {
        setLoading(false);
        setIsInitialLoad(false);
      }
    }
  };

  // Efecto para la carga inicial
  useEffect(() => {
    CargarItems(true);
  }, []);

  // Efecto para las actualizaciones periódicas
  useEffect(() => {
    if (!isInitialLoad) {
      const id = setInterval(() => {
        CargarItems(false);
      }, 5000); // Actualizar cada 5 segundos
      return () => clearInterval(id);
    }
  }, [isInitialLoad]); // Dependencia para evitar ejecución en la carga inicial

  // // Simular fetch de datos
  // useEffect(() => {
  //   const fetchData = new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(dataItems);
  //     }, 1000);
  //   });
  //   fetchData.then((res) => {
  //     // Imagen mappeada a cada item desde assets
  //     const resolved = res.map((it) => ({
  //       ...it,
  //       imageUrl: mcqueen,
  //     }));
  //     setItems(resolved); // Setear items con la data resuelta
  //     setLoading(false); // Desactivar loading
  //   });
  // }, []);

  // Filtrar items según searchTerm (propio o desde NavBar)
  const filteredItems = items.filter((it) => {
    if (!searchTerm) return true;
    const q = searchTerm.toLowerCase(); // Normalizar búsqueda
    return (
      it.name.toLowerCase().includes(q) ||
      it.description.toLowerCase().includes(q)
    );
  });

  if (loading) return <div> Cargando los productos...</div>;
  if (error)
    return (
      <div>
        <p style={{ color: "red" }}>❌ERROR: {error}</p>
      </div>
    );

  return (
    <div>
      <h2 className="greeting">{greeting}</h2>
      <div className={styles.itemListContainer}>
        {filteredItems.length === 0 ? (
          <p>No se encontraron productos.</p>
        ) : (
          <ItemList items={filteredItems} />
        )}
      </div>
    </div>
  );
};
export default ItemListContainer;
