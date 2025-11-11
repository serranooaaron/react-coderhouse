import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./navbar.module.css";
function Navbar() {
  return (
    <nav>
      <h1>AutoCars proyecto</h1>
      <div className={styles.contenedor_nav}>
        <div className={styles.nav_links}>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/Products">
            <p>Productos </p>
          </Link>
          <Link to="/Contacto">
            <p>Contacto</p>
          </Link>
        </div>
      </div>
      <div className={styles.contenedor_nav}>
        <SearchBar />
      </div>
    </nav>
  );
}

export default Navbar;
