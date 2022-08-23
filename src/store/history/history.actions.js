import { HISTORY_TYPES } from "./history.types";

export const saveCurrentCartToHistory = (currentCartProducts) => {
  console.log("currentCartProducts", currentCartProducts);
  return {
    type: HISTORY_TYPES.SAVE_CURRENT_CART,
    payload: currentCartProducts,
  };
};
