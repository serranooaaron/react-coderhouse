function Item({ item }) {
  return (
    <div>
      <h1>Vehiculo:</h1>
      <p>Id: {item.id}</p>
      <p>Nombre: {item.name}</p>
      <p>Peso: {item.weight}</p>
      <p>Altura: {item.height}</p>
    </div>
  );
}

export default Item;
