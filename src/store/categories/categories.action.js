import { CATEGORIES_TYPES } from "./categories.types";

export const setCategoryArray = (categories) => {
  return { type: CATEGORIES_TYPES.SET_CURRENT_CATEGORIES, payload: categories };
};
