import { createSelector } from "reselect";
import { RootState } from "../store";
import { UserState } from "./user-reducer";

const selectUserReducer = (state: RootState): UserState => state.user;

// export const selectCurrentUser = (state: RootState) => state.user.currentUser;
export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.currentUser
);
// export const selectUserError = (state: RootState) => state.user.error;
export const selectUserError = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.error
);
export const selectUserSignInError = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.signInError
);
export const selectUserSignUpError = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.signUpError
);
