export enum CART_TYPES {
  SET_CART_PRODUCTS = "SET_CART_PRODUCTS",
  TOGGLE_DROPDOWN = "TOGGLE_DROPDOWN",
  CLEAR_CART = "CLEAR_CART",
}

export type CartProduct = {
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
};
