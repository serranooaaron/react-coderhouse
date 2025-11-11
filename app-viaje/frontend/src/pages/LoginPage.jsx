import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/loginpage.module.css";

const LoginPage = ({}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Esto es un submit");
    //Linkear a servicio de Login
  };

  return (
    <div className={styles.loginForm}>
      <h1>Iniciar sesion</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.text_area}>
          <input
            type="text"
            value={username}
            name="username"
            placeholder="Nombre de Usuario"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div className={styles.text_area}>
          <input
            type="password"
            value={password}
            name="password"
            placeholder="Contraseña"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <div>
          <button>Iniciar Sesion</button>
          <Link to="/register" >
            <button>Registrarse</button>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;
