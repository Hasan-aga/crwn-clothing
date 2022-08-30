import { AnyAction } from "redux";
import { CATEGORIES_TYPES, Category } from "./categories.types";

export type CategoriesState = {
  readonly categoryArray: Category[];
  readonly fetching: boolean;
  readonly error: Error | null;
};

const INIT_CATEGORIES = {
  categoryArray: [],
  fetching: false,
  error: null,
};

export const categoriesReducer = (
  state: CategoriesState = INIT_CATEGORIES,
  action: AnyAction
): CategoriesState => {
  switch (action.type) {
    case CATEGORIES_TYPES.FETCHING_CURRENT_CATEGORIES:
      return { ...state, fetching: true };
    case CATEGORIES_TYPES.CURRENT_CATEGORIES_SUCCESSFUL_FETCH:
      return { ...state, fetching: false, categoryArray: action.payload };
    case CATEGORIES_TYPES.CURRENT_CATEGORIES_FAIL_FETCH:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
};
