import {
  ActionNoPayload,
  ActionWithPayload,
} from "../../utils/store/create-action.util";
import { CartProduct, CART_TYPES } from "./cart.types";

export type CartSetProducts = ActionWithPayload<
  CART_TYPES.SET_CART_PRODUCTS,
  CartProduct[]
>;
export type CartToggleDropdown = ActionWithPayload<
  CART_TYPES.TOGGLE_DROPDOWN,
  boolean
>;

export const setCartProducts = (products: CartProduct[]): CartSetProducts => {
  return { type: CART_TYPES.SET_CART_PRODUCTS, payload: products };
};

export const toggleDropdown = (dropdownStatus: boolean): CartToggleDropdown => {
  return {
    type: CART_TYPES.TOGGLE_DROPDOWN,
    payload: !dropdownStatus,
  };
};

export type CartAddToCart = ActionWithPayload<
  CART_TYPES.SET_CART_PRODUCTS,
  ReturnType<typeof getNewProductList>
>;

export const addToCart = (
  product: CartProduct,
  cartProducts: CartProduct[]
): CartAddToCart => {
  return {
    type: CART_TYPES.SET_CART_PRODUCTS,
    payload: getNewProductList(product, cartProducts),
  };
};

export type CartRemovePeoductFromCart = CartAddToCart | undefined;

export const removeProductFromCart = (
  product: CartProduct,
  cartProducts: CartProduct[]
): CartRemovePeoductFromCart => {
  const newCartProducts = cartProducts.filter(
    (element) => element.name !== product.name
  );
  if (!cartProducts || !newCartProducts) return;

  return { type: CART_TYPES.SET_CART_PRODUCTS, payload: [...newCartProducts] };
};

export type CartClearCart = ActionNoPayload<CART_TYPES.CLEAR_CART>;

export const clearCart = (): CartClearCart => {
  return { type: CART_TYPES.CLEAR_CART };
};

export type CartChangeProductQuantity = CartAddToCart | undefined;

export const changeProductQuantity = (
  product: CartProduct,
  cartProducts: CartProduct[],
  increment = true
): CartChangeProductQuantity => {
  if (product.quantity <= 1 && !increment) return;
  increment ? (product.quantity += 1) : (product.quantity -= 1);
  return { type: CART_TYPES.SET_CART_PRODUCTS, payload: [...cartProducts] };
};

const getNewProductList = (
  product: CartProduct,
  cartProducts: CartProduct[]
): CartProduct[] => {
  if (!cartProducts) return [{ ...product, quantity: 1 }];

  const existingProduct = cartProducts.find(
    (element) => element.name === product.name
  );
  if (!existingProduct) return [{ ...product, quantity: 1 }, ...cartProducts];

  existingProduct.quantity += 1;
  return [...cartProducts];
};
