import { AnyAction } from "redux";
import { CartProduct, CART_TYPES } from "./cart.types";

export type CartState = {
  readonly cartProducts: CartProduct[];
  readonly dropdownStatus: boolean;
};

const INITIAL_CART_STATE = {
  cartProducts: [],
  dropdownStatus: false,
};

export const cartReducer = function (
  state: CartState = INITIAL_CART_STATE,
  action: AnyAction
): CartState {
  if (action.type !== undefined && action.type in CART_TYPES) {
    const { type, payload } = action;
    switch (type) {
      case CART_TYPES.SET_CART_PRODUCTS:
        return {
          ...state,
          cartProducts: payload,
        };
      case CART_TYPES.TOGGLE_DROPDOWN:
        return {
          ...state,
          dropdownStatus: payload,
        };
      case CART_TYPES.CLEAR_CART:
        return {
          ...state,
          cartProducts: [],
        };
    }
  }
  return state;
};
