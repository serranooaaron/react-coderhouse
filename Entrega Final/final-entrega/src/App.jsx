import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./views/home.jsx";
import Products from "./views/products.jsx";
import Contact from "./views/contact.jsx";
import Details from "./views/details.jsx";
import NotFound from "./views/notFound.jsx";
import "./styles.css";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;