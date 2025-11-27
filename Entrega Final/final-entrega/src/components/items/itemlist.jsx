import React from "react";
import Item from "./item.jsx";
import styles from "./itemlist.module.css";

// Este componente recibe un array de productos y los muestra en un grid
function ItemList({ products }) {
  // Si no hay productos, mostramos un mensaje
  if (products.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No se encontraron productos 😕</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {/* Mapeamos cada producto y creamos un componente Item por cada uno */}
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemList;
