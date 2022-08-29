import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart-reducer";
import { historyReducer } from "./history/history.reducer";
import { userReducer } from "./user/user-reducer";
import {
  categoriesReducer,
  CategoriesState,
} from "./categories/categories.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  history: historyReducer,
});
