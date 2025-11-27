
import { Link } from "react-router-dom";
import styles from "./home.module.css";


function Home() {
  return (
    <div className={styles.container}>
      <h1>Bienvenido a Mi Tienda</h1>
      <p>Encuentra productos de tecnología</p>
      <Link to="/products" className={styles.button}>
        Ver Productos
      </Link>
    </div>
  );
}

export default Home;