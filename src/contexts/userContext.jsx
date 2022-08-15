import { useReducer } from "react";
import { createContext, useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.util";

// creating the actual context with default value
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const userReducer = function (state, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTIONS.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`unknown type ${type} in userReducer`);
  }
};

const INITIAL_USER_STATE = {
  currentUser: null,
};

export const USER_ACTIONS = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_USER_STATE);
  const { currentUser } = state;
  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTIONS.SET_CURRENT_USER, payload: user });
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsub = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user);
      setCurrentUser(user);
    });
    return unsub;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
