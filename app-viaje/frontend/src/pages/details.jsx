import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import itemService from "../services/itemsService";
import mcqueen from "../assets/Rayo_McQueen.png";
import styles from "../styles/detalles.module.css";

const Details = () => {
  const { id } = useParams(); // Obtener id desde los parámetros de la URL
  const [item, setItem] = useState(null); // Estado para el item detallado
  const [count, setCount] = useState(0); // Estado para el contador

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const data = await itemService.obtenerPorId(id);
        if (data) {
          // Agregar imagen al item
          const itemConImagen = { ...data, imageUrl: mcqueen };
          setItem(itemConImagen);
        }
      } catch (error) {
        console.error("Error al obtener el item:", error);
      }
    };
    fetchItem();
  }, [id]);

  if (!item) {
    return <div>Producto no encontrado...</div>;
  }

  return (
    <>
      <div className={styles.detalles}>
        <h2>Detalle del Producto</h2>
        <div className={styles.detalleContainer}>
          <section className={styles.detalleCard1}>
            <div>
              <img src={item.imageUrl} alt={item.name} />
            </div>
          </section>
          <section className={styles.detalleCard2}>
            <div className={styles.detalleTitle}>
              <h3>{item.name}</h3>
            </div>
            <div className={styles.detalleDescription}>
              <p>{item.description}</p>
            </div>
            <div className={styles.detallePrecio}>
              <p>Precio: U$D {item.price}</p>
            </div>
            <button
              onClick={() => setCount(count + 1)}
              className={styles.detalleButton}
            >
              Agregar al Carrito
            </button>
          </section>
        </div>
      </div>
    </>
  );
};
export default Details;
