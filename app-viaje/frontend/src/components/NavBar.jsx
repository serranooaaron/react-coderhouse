import CartWidget from "./Cart/CartWidget.jsx";
import SearchBar from "./SearchBar.jsx";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";

function NavBar({ setSearchTerm }) {
  // Recibe setSearchTerm desde App.jsx
  return (
    <>
      <header className="header">
        <h1>Flying Around</h1>
        <nav className="navbar">
          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/">About</NavLink>
            <NavLink to="/">Contact</NavLink>
          </div>
          <div className="container">
            <SearchBar setSearchTerm={setSearchTerm} className="search-bar" />
            <CartWidget className="cart-widget" />
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
