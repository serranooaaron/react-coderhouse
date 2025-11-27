
import { Link } from "react-router-dom";
import SearchBar from "../searchbar/searchbar.jsx";
import styles from "./navbar.module.css";


function Navbar({ searchValue, onSearchChange, showSearch }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>Mi Tienda</Link>
        {showSearch && <SearchBar searchValue={searchValue} onSearchChange={onSearchChange} />}
        <div className={styles.links}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/products" className={styles.link}>Productos</Link>
          <Link to="/contact" className={styles.link}>Contacto</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;