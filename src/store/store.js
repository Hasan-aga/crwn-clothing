import { compose, createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) return next(action);

  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("current state: ", store.getState());

  //   pass the action to reducers and update the store
  next(action);

  // now we can log the next state
  console.log("next state: ", store.getState());
};

const middleWares = [
  process.env.NODE_ENV === "development" && loggerMiddleware,
].filter(Boolean);

const persistConfig = {
  key: "root", //save everything
  storage, //save in local storage
  blacklist: ["user"], //do not save user
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
