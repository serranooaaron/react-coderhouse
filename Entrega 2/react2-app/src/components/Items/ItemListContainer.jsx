import ItemList from "./ItemList";
import { useEffect, useState } from "react";

function ItemListContainer({ searchValue = "" }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let abortController = new AbortController();
    async function CargaItems() {
      setLoading(true);
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30", {
          // Listamos hasta diez pokemons
          signal: abortController.signal, // Asociamos la señal de aborto
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json(); // Obtener datos JSON
        const detalles = await Promise.all(
          //Mapeamos el array para obtener detalles de cada pokemon
          data.results.map(async (r) => {
            const r2 = await fetch(r.url, { signal: abortController.signal });
            if (!r2.ok) throw new Error(`Detalle HTTP ${r2.status}`);
            return r2.json();
          })
        );
        setItems(detalles); // Actualizamos el estado con los items obtenidos
      } catch (e) {
        if (e.name === "AbortError") return; // Cancelado
        setError(e.message || " No se pudo realizar carga de archivos.");
      } finally {
        setLoading(false);
      }
    }
    CargaItems();
    return () => abortController.abort();
  }, []);

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
  if (loading) return <div>Cargando los productos...</div>;
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
