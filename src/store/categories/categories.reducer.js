import { CATEGORIES_TYPES } from "./categories.types";

const INIT_CATEGORIES = { categoryArray: [] };

export const categoriesReducer = (state = INIT_CATEGORIES, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_TYPES.SET_CURRENT_CATEGORIES:
      return { ...state, categoryArray: payload };

    default:
      return state;
  }
};
