import styles from "./item.module.css";
function Item({ item }) {
  const artwork =
    item?.sprites?.other?.["official-artwork"]?.front_default || // Utilizamos artwork oficial si existe, sino fallback a sprite frontal
    item?.sprites?.front_default;

  return (
    <div className={styles.item_container}>
      <h2>{item.name}</h2>
      {artwork ? (
        <img
          src={artwork}
          alt={item.name}
          width={120}
          height={120}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
      ) : (
        <div style={{ width: 120, height: 120 }}>Sin imagen</div>
      )}
      <p>Id: {item.id}</p>

      <p>Peso: {item.weight} kg</p>
      <p>Altura: {item.height} Pies</p>
    </div>
  );
}

export default Item;
