import ItemList from "./ItemList";
import { useEffect, useState } from "react";

function ItemListContainer({ searchValue = " " }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function CargaItems() {
      setLoading(true);
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/", {});
        if (!res.ok) {
          if (res.status == 400)
            throw new Error(
              `Peticion de error: HTTP ${res.status}, Peticion invalida`
            );
          if (res.status == 401)
            throw new Error(
              `Peticion de error: HTTP ${res.status}, No autorizado`
            );
          if (res.status == 403)
            throw new Error(
              `Peticion de error: HTTP ${res.status}, Solicitud Rechazada `
            );
          if (res.status == 404)
            throw new Error(
              `Peticion de error: HTTP ${res.status}, No se encuentra el recurso`
            );
          if (res.status == 500)
            throw new Error(
              `Peticion de error: HTTP ${res.status}, Error en el servidor`
            );
        }
        const data = await res.json();
        setItems(data.results);
      } catch (e) {
        setError(e.message || " No se pudo realizar carga de archivos.");
      } finally {
        setLoading(false);
      }
    }
    CargaItems();
  }, [searchValue]);

  // Logica de filtrado por searchBar
  const itemsfiltrados = items.filter((it) => {
    if (!searchValue) {
      return true;
    }
    const query = searchValue.toLowerCase(); // Normalizamos
    return it.name.toLowerCase().includes(query);
  });
  //

  // Logica de cargando y error siendo estas TRUE.
  if (loading) return <div> Cargando los productos...</div>;
  if (error)
    return (
      <div>
        <p style={{ color: "red" }}>❌ERROR: {error}</p>
      </div>
    );

  return (
    <div>
      {itemsfiltrados.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : (
        <ItemList items={itemsfiltrados} />
      )}
    </div>
  );
}

export default ItemListContainer;
