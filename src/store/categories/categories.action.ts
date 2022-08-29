import { CATEGORIES_TYPES, Category } from "./categories.types";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.util";
import {
  ActionNoPayload,
  ActionWithPayload,
  createAction,
} from "../../utils/store/create-action.util";

export type CategoriesFetchStart =
  ActionNoPayload<CATEGORIES_TYPES.FETCHING_CURRENT_CATEGORIES>;

export type CategoriesFetchSuccess = ActionWithPayload<
  CATEGORIES_TYPES.CURRENT_CATEGORIES_SUCCESSFUL_FETCH,
  Category[]
>;

export type CategoriesFetchFail = ActionWithPayload<
  CATEGORIES_TYPES.CURRENT_CATEGORIES_FAIL_FETCH,
  Error
>;

export type CategoryActionsType =
  | CategoriesFetchStart
  | CategoriesFetchSuccess
  | CategoriesFetchFail;

export const startFetchCategories = (): CategoriesFetchStart => {
  return createAction(CATEGORIES_TYPES.FETCHING_CURRENT_CATEGORIES);
};

export const fetchCategoriesSuccess = (
  categories: Category[]
): CategoriesFetchSuccess => {
  return createAction(
    CATEGORIES_TYPES.CURRENT_CATEGORIES_SUCCESSFUL_FETCH,
    categories
  );
};

export const fetchCategoriesFail = (error: Error): CategoriesFetchFail => {
  return createAction(CATEGORIES_TYPES.CURRENT_CATEGORIES_FAIL_FETCH, error);
};
