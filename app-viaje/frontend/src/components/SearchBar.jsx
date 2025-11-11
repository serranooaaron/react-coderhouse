import { useEffect, useRef } from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ setSearchTerm, className }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div className={className || "search-bar"}>
      <input
        type="text"
        placeholder="Ingrese lo que desea buscar..."
        ref={inputRef}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
    </div>
  );
};
export default SearchBar;
