import { RootState } from "../store";

export const selectCurrentUser = (state: RootState) => state.user.currentUser;
export const selectUserError = (state: RootState) => state.user.error;
export const selectUserSignInError = (state: RootState) =>
  state.user.signInError;
export const selectUserSignUpError = (state: RootState) =>
  state.user.signUpError;
