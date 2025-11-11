import ItemListContainer from "../components/Item/ItemListContainer";

const Products = ({ searchTerm }) => {
  return (
    <>
      <h1>Lista de productos: </h1>
      <ItemListContainer
        greeting={"Bienvenidos a mi tienda"}
        searchTerm={searchTerm}
      />
    </>
  );
};
export default Products;
