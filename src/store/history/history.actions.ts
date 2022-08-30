import { ActionWithPayload } from "../../utils/store/create-action.util";
import { CartProduct } from "../cart/cart.types";
import { HistoryProduct, HISTORY_TYPES } from "./history.types";

export type HistorySaveCurrentCart = ActionWithPayload<
  HISTORY_TYPES.SAVE_CURRENT_CART,
  HistoryProduct[]
>;

export const saveCurrentCartToHistory = (
  currentCartProducts: CartProduct[],
  exisitingHistoryProductGroups: HistoryProduct[]
): HistorySaveCurrentCart => {
  const productGroup = {
    date: new Date(),
    boughtTogether: currentCartProducts,
  };
  return {
    type: HISTORY_TYPES.SAVE_CURRENT_CART,
    payload: [productGroup, ...exisitingHistoryProductGroups],
  };
};
