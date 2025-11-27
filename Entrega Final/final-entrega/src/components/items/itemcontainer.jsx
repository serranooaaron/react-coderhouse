import React from "react";
import ItemList from "./itemlist.jsx";
import styles from "./itemcontainer.module.css";

// Contenedor solo filtra y muestra
function ItemListContainer({ products, searchValue }) {
  // Filtrado por nombre
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <p className={styles.info}>
        Mostrando {filteredProducts.length} productos
      </p>
      <ItemList products={filteredProducts} />
    </div>
  );
}

export default ItemListContainer;