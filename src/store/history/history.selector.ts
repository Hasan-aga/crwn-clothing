import { createSelector } from "reselect";
import { RootState } from "../store";

const selectHistoryReducer = (state: RootState) => state.history;

export const selectHistoryBoughtItems = createSelector(
  [selectHistoryReducer],
  (historySlice) => historySlice.boughtItems
);
