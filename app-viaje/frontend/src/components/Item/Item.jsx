import styles from "../../styles/item.module.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className={styles.itemCard}>
      <img src={item.imageUrl} alt={item.name} className={styles.itemImage} />
      <div className={styles.itemDetails}>
        <h3 className={styles.itemName}>{item.name}</h3>
        <p className={styles.itemPrice}>Precio: U$D {item.price}</p>
        <Link to={`/details/${item.id}`} className={styles.itemButton}>
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
