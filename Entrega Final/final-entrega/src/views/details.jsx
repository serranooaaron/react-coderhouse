import React from "react";
import { useParams, Link, useOutletContext } from "react-router-dom";
import styles from "./details.module.css";

function Details() {
  const { id } = useParams();
  // Obtener productos del contexto (ya cargados en MainLayout)
  const { products } = useOutletContext();

  // Mostrar loading mientras cargan los productos
  if (!products || products.length === 0) {
    return (
      <div className={styles.container}>
        <p>Cargando...</p>
      </div>
    );
  }

  // Buscar producto - comparar como string e integer
  const product = products.find((p) => p.id === id || p.id === parseInt(id));

  if (!product) {
    return (
      <div className={styles.container}>
        <p>Producto no encontrado</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <h1>{product.name}</h1>
      <p className={styles.category}>{product.category}</p>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>${product.price}</p>
      <p>Stock disponible: {product.stock}</p>
      <Link to="/products" className={styles.button}>
        Volver a Productos
      </Link>
    </div>
  );
}

export default Details;
