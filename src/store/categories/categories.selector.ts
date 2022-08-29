import { createSelector } from "reselect";
import { RootState } from "../store";
import { CategoriesState } from "./categories.reducer";
import { CategoriesMap } from "./categories.types";

const selectCategoriesReducer = (state: RootState): CategoriesState => {
  return state.categories;
};

const selectCategoriesArray = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => {
    return categoriesSlice.categoryArray;
  }
);
export const selectCategoriesMap = createSelector(
  [selectCategoriesArray],
  (categoriesArray): CategoriesMap | null => {
    if (!categoriesArray) return null;
    return categoriesArray.reduce((acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoriesMap);
  }
);

export const selectCategoriesAreFetching = createSelector(
  [selectCategoriesReducer],
  (categorySlice) => categorySlice.fetching
);
