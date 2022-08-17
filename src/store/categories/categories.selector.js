export const selectCategories = (state) =>
  state.categories.categoryArray.reduce((acc, { title, items }) => {
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
