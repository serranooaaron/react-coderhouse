import styles from "./searchBar.module.css";
import { useEffect, useRef } from "react";

function searchbar({ setValue }) {
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div className={styles.text_area}>
      <input
        onChange={(e) => setValue(e.target.value)}
        ref={inputRef}
        type="text"
        placeholder="Ingrese su busqueda..."
      />
    </div>
  );
}

export default searchbar;
