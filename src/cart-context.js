import { createContext, useContext } from "react";
import { useReducer } from "react";
import { cartReducer } from "./cartReducer";
import { itemsInCart } from "./data";

const CartContext = createContext(null);

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: 0,
    totalPrice: 0,
    items: itemsInCart
  });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider };
