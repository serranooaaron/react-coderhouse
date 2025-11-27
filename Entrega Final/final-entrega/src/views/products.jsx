import { useOutletContext } from "react-router-dom";
import ItemListContainer from "../components/items/itemcontainer.jsx";
import styles from "./products.module.css";

function Products() {
  // Obtener productos y searchValue del contexto (ya cargados en MainLayout)
  const { searchValue, products } = useOutletContext();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Nuestros Productos</h1>
      <ItemListContainer products={products} searchValue={searchValue} />
    </div>
  );
}

export default Products;
