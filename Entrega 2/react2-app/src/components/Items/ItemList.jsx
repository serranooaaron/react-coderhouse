import Item from "./Item.jsx";
import styles from "./itemlist.module.css";
function ItemList({ items }) {
  return (
    <div className={styles.itemlist}>
      {items.map((item) => (
        <div key={item.id}>
          <Item item={item} />
        </div>
      ))}
    </div>
  );
}

export default ItemList;
