import { useReducer } from "react";
import { createContext, useState } from "react";

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

const CartReducer = function (state, action) {
  console.log(`reducer dispatched, action:`, action);
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS.SET_CART_PRODUCTS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTIONS.TOGGLE_DROPDOWN:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`unknown type ${type} in cartReducer`);
  }
};

const INITIAL_CART_STATE = {
  cartProducts: [],
  cartProductsCount: 0,
  cartTotal: 0,
  dropdownStatus: false,
};

export const CART_ACTIONS = {
  SET_CART_PRODUCTS: "SET_CART_PRODUCTS",
  TOGGLE_DROPDOWN: "TOGGLE_DROPDOWN",
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, INITIAL_CART_STATE);
  const { cartProducts, cartProductsCount, cartTotal, dropdownStatus } = state;

  const setCartProducts = (products) => {
    dispatch({ type: CART_ACTIONS.SET_CART_PRODUCTS, payload: products });
  };

  const toggleDropdown = () => {
    dispatch({
      type: CART_ACTIONS.TOGGLE_DROPDOWN,
      payload: { dropdownStatus: !dropdownStatus },
    });
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
    updateCartProps(getNewProductList(product));
  };

  const removeProductFromCart = (product) => {
    const newCartProducts = cartProducts.filter(
      (element) => element.name !== product.name
    );
    if (!cartProducts || !newCartProducts) return;

    updateCartProps([...newCartProducts]);
  };

  const changeProductQuantity = (product, increment = true) => {
    if (product.quantity <= 1 && !increment) return;
    increment ? (product.quantity += 1) : (product.quantity -= 1);
    updateCartProps([...cartProducts]);
  };

  const updateCartProps = (newProducts) => {
    const count = newProducts.reduce(
      (acc, product) => (acc += product.quantity),
      0
    );
    const cartTotal = newProducts.reduce(
      (acc, product) => (acc += product.quantity * product.price),
      0
    );

    setCartProducts({
      cartProducts: newProducts,
      cartProductsCount: count,
      cartTotal,
    });
  };

  const value = {
    cartProducts,
    addToCart,
    toggleDropdown,
    dropdownStatus,
    cartProductsCount,
    cartTotal,
    removeProductFromCart,
    changeProductQuantity,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
