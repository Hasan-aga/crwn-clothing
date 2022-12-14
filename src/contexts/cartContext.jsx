import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cartProducts: [],
  setCartProducts: () => [],
  cartProductsCount: 0,
  setCartProductsCount: () => 0,
  cartTotal: 0,
  setCartTotal: () => 0,
  dropdownStatus: false,
  setDropDownStatus: () => null,
});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [dropDownStatus, setDropDownStatus] = useState(false);
  const [cartProductsCount, setCartProductsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const toggleDropdown = () => {
    setDropDownStatus(!dropDownStatus);
  };

  const getNewProductList = (product) => {
    if (!cartProducts) return [{ quantity: 1, ...product }];

    if (!cartProducts.find((element) => product.name === element.name))
      return [{ quantity: 1, ...product }, ...cartProducts];

    const existingProduct = cartProducts.find(
      (element) => element.name === product.name
    );
    existingProduct.quantity += 1;
    return [...cartProducts];
  };

  const addToCart = (product) => {
    setCartProducts(getNewProductList(product));
  };

  const removeProductFromCart = (product) => {
    const newCartProducts = cartProducts.filter(
      (element) => element.name !== product.name
    );
    if (!cartProducts || !newCartProducts) return;
    setCartProducts([...newCartProducts]);
  };

  const changeProductQuantity = (product, increment = true) => {
    if (product.quantity <= 1 && !increment) return;
    increment ? (product.quantity += 1) : (product.quantity -= 1);
    setCartProducts([...cartProducts]);
  };

  useEffect(() => {
    const count = cartProducts.reduce(
      (acc, product) => (acc += product.quantity),
      0
    );
    setCartProductsCount(count);
  }, [cartProducts]);

  useEffect(() => {
    const cartTotal = cartProducts.reduce(
      (acc, product) => (acc += product.quantity * product.price),
      0
    );
    setCartTotal(cartTotal);
  }, [cartProducts]);

  const value = {
    cartProducts,
    setCartProducts,
    addToCart,
    toggleDropdown,
    dropDownStatus,
    cartProductsCount,
    cartTotal,
    setCartTotal,
    removeProductFromCart,
    changeProductQuantity,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
