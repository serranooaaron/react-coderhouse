import { useState } from "react"; // Importa useState desde React
import "../../styles/CartWidget.css"; // Asegúrate de tener este archivo CSS
import cartIcon from "../../assets/cart-icon.png"; // Asegúrate de tener un ícono de carrito en esta ruta

function CartWidget() {
  const [itemCount, setItemCount] = useState(0); // Estado para el contador de items

  // Asegurarse de que el contador no sea negativo
  if (itemCount < 0) {
    setItemCount(0);
  }

  return (
    <>
      <div className="cart-widget">
        <img className="cart-icon" src={cartIcon} alt="Carrito de compras" />
        <span className="item-count">{itemCount}</span>
        <button onClick={() => setItemCount(itemCount + 1)}>+</button>
        <button onClick={() => setItemCount(itemCount - 1)}>-</button>
      </div>
    </>
  );
}
export default CartWidget;
