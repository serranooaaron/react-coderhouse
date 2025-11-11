import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./navbar.module.css";
function Navbar({ setSearchValue }) {
  return (
    <nav className={styles.barra_navegacion}>
      <h1 className={styles.titulo_nav}>Pokemons</h1>
      <div className={styles.grupo_links_nav}>
        <Link to="/" className={styles.link_nav}>
          <p className={styles.boton_link_nav}>Home</p>
        </Link>
        <Link to="/Products" className={styles.link_nav}>
          <p className={styles.boton_link_nav}>Productos</p>
        </Link>
        <Link to="/Contacto" className={styles.link_nav}>
          <p className={styles.boton_link_nav}>Contacto</p>
        </Link>
      </div>
      <div className={styles.zona_busqueda_nav}>
        <SearchBar setValue={setSearchValue} />
      </div>
    </nav>
  );
}

export default Navbar;
