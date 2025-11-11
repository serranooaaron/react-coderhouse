import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar.jsx";
import { useState } from "react";

function MainLayout() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <NavBar setSearchValue={setSearchValue} />
      <Outlet context={{ searchValue }} />
      {/* Outlet permite que se renderizaren las rutas hijas, Permite que rendericen el resto de rutas, sino funcionaria por separado. */}
    </>
  );
}

export default MainLayout;
