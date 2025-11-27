
import { Link } from "react-router-dom";
import styles from "./notFound.module.css";

// Página 404 - se muestra cuando la ruta no existe
// Esta página NO tiene Navbar
function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Página no encontrada</h2>
        <p className={styles.text}>
          Lo sentimos, la página que estás buscando no existe o fue movida.
        </p>
        <Link to="/" className={styles.homeButton}>
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
