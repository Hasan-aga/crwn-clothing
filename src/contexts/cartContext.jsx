import { createContext, useState } from "react";

export const CartContext = createContext({
  cartProducts: [],
  setCartProducts: () => [],
});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (product) => {
    console.log(cartProducts);
    console.log(`adding ${product.name} to ${cartProducts}`);
    if (!cartProducts) setCartProducts([{ quantity: 1, ...product }]);

    if (!cartProducts.find((element) => product.name === element.name))
      cartProducts.push({ quantity: 1, ...product });
    else {
      const existingProduct = cartProducts.find(
        (element) => element.name === product.name
      );
      existingProduct.quantity += 1;
      setCartProducts(cartProducts);
    }
  };

  const value = {
    cartProducts,
    setCartProducts,
    addToCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
