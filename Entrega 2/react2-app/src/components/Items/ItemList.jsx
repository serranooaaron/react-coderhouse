import Item from "./Item.jsx";
function ItemList({ items }) {
  return (
    <div>
      {items.map((item) => (
        <div className="itemList" key={item.id}>
          <Item item={item} />
        </div>
      ))}
    </div>
  );
}

export default ItemList;
