import { createContext, useState } from "react";

export const CartContext = createContext({
  cartProducts: [],
  setCartProducts: () => [],
  dropdownStatus: false,
  setDropDownStatus: () => null,
});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [dropDownStatus, setDropDownStatus] = useState(false);

  const toggleDropdown = () => {
    setDropDownStatus(!dropDownStatus);
  };

  const getNewProductList = (product) => {
    console.log(cartProducts);
    console.log(`adding ${product.name} to ${cartProducts}`);
    if (!cartProducts) return [{ quantity: 1, ...product }];

    if (!cartProducts.find((element) => product.name === element.name))
      return [{ quantity: 1, ...product }, ...cartProducts];
    else {
      const existingProduct = cartProducts.find(
        (element) => element.name === product.name
      );
      existingProduct.quantity += 1;
      return [...cartProducts];
    }
  };

  const addToCart = (product) => {
    setCartProducts(getNewProductList(product));
  };

  const value = {
    cartProducts,
    setCartProducts,
    addToCart,
    toggleDropdown,
    dropDownStatus,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
