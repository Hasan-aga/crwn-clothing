// import { takeLatest, all, call, put } from "redux-saga/effects";
import { takeLatest, all, call, put } from "typed-redux-saga";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.util";
import { CATEGORIES_TYPES } from "./categories.types";
import {
  fetchCategoriesFail,
  fetchCategoriesSuccess,
} from "./categories.action";

function* fetchCategoriesAsync() {
  try {
    const result = yield* call(getCategoriesAndDocuments);
    yield* put(fetchCategoriesSuccess(result));
  } catch (error) {
    yield* put(fetchCategoriesFail(error as Error));
  }
}

function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_TYPES.FETCHING_CURRENT_CATEGORIES,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
