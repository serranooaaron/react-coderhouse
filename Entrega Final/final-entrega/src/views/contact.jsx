
import styles from "./contact.module.css";

function Contact() {
  return (
    <div className={styles.container}>
      <h1>Contacto</h1>
      <div className={styles.info}>
        <p><strong>Email:</strong> contacto@serrano.com</p>
        <p><strong>Teléfono:</strong> +54 11 1234-5555</p>
        <p><strong>Dirección:</strong> Buenos Aires, Argentina</p>
      </div>
    </div>
  );
}

export default Contact;