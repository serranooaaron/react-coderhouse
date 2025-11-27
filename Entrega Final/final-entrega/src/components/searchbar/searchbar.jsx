import React from "react";
import styles from "./searchbar.module.css";

function SearchBar({ searchValue, onSearchChange }) {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        className={styles.searchInput}
      />
    </div>
  );
}

export default SearchBar;