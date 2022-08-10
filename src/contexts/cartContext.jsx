import { createContext, useState } from "react";

export const CartContext = createContext({
  cartProducts: [],
  setCartProducts: () => [],
});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const value = {
    cartProducts,
    setCartProducts,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
