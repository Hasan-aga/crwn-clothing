import { USER_TYPES } from "./user.types";

const INITIAL_USER_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = function (state = INITIAL_USER_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        error: null,
        currentUser: payload,
      };
    case USER_TYPES.SIGN_IN_FAIL:
      return {
        error: payload,
      };
    case USER_TYPES.SIGN_OUT:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    default:
      return state;
  }
};
