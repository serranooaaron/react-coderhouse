
import { Link } from "react-router-dom";
import styles from "./item.module.css";


function Item({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <h3 className={styles.title}>{product.name}</h3>
      <p className={styles.category}>{product.category}</p>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>${product.price}</p>
      <Link to={`/products/${product.id}`} className={styles.button}>
        Ver Detalles
      </Link>
    </div>
  );
}

export default Item;