import { AnyAction } from "redux";
import { USER_TYPES } from "./user.types";

export type UserState = {
  currentUser: any | null;
  isLoading: boolean;
  error: Error | null;
  signInError: Error | null;
  signUpError: Error | null;
};

const INITIAL_USER_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
  signInError: null,
  signUpError: null,
};

export const userReducer = function (
  state: UserState = INITIAL_USER_STATE,
  action: AnyAction
): UserState {
  const { type, payload } = action;
  // TODO: investigate why we dont handle case SIGN_UP_SUCCESS?
  switch (type) {
    case USER_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        error: null,
        currentUser: payload,
      };
    case USER_TYPES.SIGN_IN_FAIL:
      return {
        ...state,
        signInError: payload,
      };
    case USER_TYPES.SIGN_OUT:
      return {
        ...state,
        currentUser: null,
        error: null,
      };

    case USER_TYPES.SIGN_UP_FAIL:
      return {
        ...state,
        signUpError: payload,
      };
    default:
      return state;
  }
};
