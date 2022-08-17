import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => {
  console.log("1st selector fired", state);
  return state.categories;
};

const selectCategoriesArray = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => {
    console.log("2nd selector fired", categoriesSlice);
    return categoriesSlice.categoryArray;
  }
);
export const selectCategoriesMap = createSelector(
  [selectCategoriesArray],
  (categoriesArray) => {
    console.log("3rd selector fired", categoriesArray);
    if (!categoriesArray) return null;
    return categoriesArray.reduce((acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
