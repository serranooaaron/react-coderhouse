import ItemListContainer from "../components/Items/ItemListContainer";
import { useOutletContext } from "react-router-dom";
const Products = () => {
  const { searchValue } = useOutletContext();
  return (
    <div>
      <h1>Products</h1>
      <ItemListContainer searchValue={searchValue} />
    </div>
  );
};

export default Products;
