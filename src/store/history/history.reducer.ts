import { AnyAction } from "redux";
import { HISTORY_TYPES } from "./history.types";

export type HistoryState = {
  boughtItems: any[];
};

const INITIAL_HISTORY_STATE = {
  boughtItems: [],
};

export const historyReducer = (
  state: HistoryState = INITIAL_HISTORY_STATE,
  action: AnyAction
): HistoryState => {
  const { type, payload } = action;

  switch (type) {
    case HISTORY_TYPES.SAVE_CURRENT_CART:
      return {
        ...state,
        boughtItems: [...payload],
      };

    default:
      return state;
  }
};
