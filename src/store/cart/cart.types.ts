import { CategoryItem } from "../categories/categories.types";

export enum CART_TYPES {
  SET_CART_PRODUCTS = "SET_CART_PRODUCTS",
  TOGGLE_DROPDOWN = "TOGGLE_DROPDOWN",
  CLEAR_CART = "CLEAR_CART",
}

export type CartProduct = CategoryItem & {
  quantity: number;
};
