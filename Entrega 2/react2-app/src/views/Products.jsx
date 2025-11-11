import { useState } from "react";
import ItemListContainer from "../components/Items/ItemListContainer";

const Products = ({ searchValue = "" }) => {
 
  return (
    <div>
      <h1>Products</h1>
      <ItemListContainer />
    </div>
  );
};

export default Products;
