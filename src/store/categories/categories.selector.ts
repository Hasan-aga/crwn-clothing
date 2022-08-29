import { createSelector } from "reselect";
import { CategoriesState } from "./categories.reducer";
import { Category } from "./categories.types";

const selectCategoriesReducer = (state): CategoriesState => {
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
  (categoriesArray) => {
    if (!categoriesArray) return null;
    return categoriesArray.reduce((acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);

export const selectCategoriesAreFetching = createSelector(
  [selectCategoriesReducer],
  (categorySlice) => categorySlice.fetching
);
