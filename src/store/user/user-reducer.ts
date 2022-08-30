import { AnyAction } from "redux";
import { UserData } from "../../utils/firebase/firebase.util";
import { USER_TYPES } from "./user.types";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
  readonly signInError: Error | null;
  readonly signUpError: Error | null;
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
  if (action.type !== undefined && action.type in USER_TYPES) {
    const { type, payload } = action;
    switch (type) {
      case USER_TYPES.SIGN_IN_SUCCESS:
        return {
          ...state,
          error: null,
          signInError: null,
          signUpError: null,
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
          signInError: null,
          signUpError: null,
        };
      case USER_TYPES.SIGN_OUT_FAIL:
        return {
          ...state,
          error: payload,
        };
      case USER_TYPES.SIGN_UP_FAIL:
        return {
          ...state,
          signUpError: payload,
        };
      case USER_TYPES.SIGN_UP_SUCCESS:
        return {
          ...state,
          currentUser: payload,
        };
    }
  }

  return state;
};
