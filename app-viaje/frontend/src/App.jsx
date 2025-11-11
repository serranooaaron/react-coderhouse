import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Details from "./pages/details.jsx";
import Products from "./pages/Products.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotFound404 from "./pages/NotFound404.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      {/* Pasar setSearchTerm a NavBar */}
      <NavBar setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Products searchTerm={searchTerm} />}
        />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/*" element={<NotFound404 />} />
      </Routes>
    </>
  );
}

export default App;
