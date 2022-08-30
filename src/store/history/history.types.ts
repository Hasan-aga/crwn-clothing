import { CartProduct } from "../cart/cart.types";

export enum HISTORY_TYPES {
  SAVE_CURRENT_CART = "history/SAVE_CURRENT_CART",
}

export type HistoryProduct = { date: Date; boughtTogether: CartProduct[] };
