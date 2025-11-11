import { useContext, useState } from "react";

export const CartCounter = createContext({
  contador: 0,
  setItemCount: () => {},
});

export const CartCounterProvider = ({ children }) => {
    const [itemCount, setItemCount] = useState(0);
    try { 
        
    } catch { 
        
    }
}
