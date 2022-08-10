import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cartProducts: [],
  setCartProducts: () => [],
  cartProductsCount: 0,
  setCartProductsCount: () => 0,
  dropdownStatus: false,
  setDropDownStatus: () => null,
});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [dropDownStatus, setDropDownStatus] = useState(false);
  const [cartProductsCount, setCartProductsCount] = useState(0);

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

  useEffect(() => {
    const count = cartProducts.reduce(
      (acc, product) => (acc += product.quantity),
      0
    );
    setCartProductsCount(count);
  }, [cartProducts]);

  const value = {
    cartProducts,
    setCartProducts,
    addToCart,
    toggleDropdown,
    dropDownStatus,
    cartProductsCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
