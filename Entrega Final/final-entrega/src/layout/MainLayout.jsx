import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/navbar.jsx";
import { obtenerProductos } from "../firebase/services.js";

function MainLayout() {
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const showSearch = location.pathname === "/products";

  // Cargar productos UNA VEZ cuando se monta el layout
  useEffect(() => {
    obtenerProductos().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <Navbar
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        showSearch={showSearch}
      />
      {/* Pasamos products y searchValue a todas las vistas hijas */}
      <Outlet context={{ searchValue, products }} />
    </>
  );
}

export default MainLayout;
