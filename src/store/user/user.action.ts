import {
  ActionNoPayload,
  ActionWithPayload,
} from "../../utils/store/create-action.util";
import { USER_TYPES } from "./user.types";

export type UserCheckSession = ActionNoPayload<USER_TYPES.CHECK_USER_SESSION>;
export type UserGoogleSignInStart =
  ActionNoPayload<USER_TYPES.GOOGLE_SIGN_IN_START>;
export type UserEmailSignInStart = ActionWithPayload<
  USER_TYPES.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>;
export type UserSignInSuccess = ActionWithPayload<
  USER_TYPES.SIGN_IN_SUCCESS,
  any
>;
export type UserSignInFail = ActionWithPayload<USER_TYPES.SIGN_IN_FAIL, Error>;
export type UserSignOutStart = ActionNoPayload<USER_TYPES.SIGN_OUT>;
export type UserSignOutSuccess = ActionNoPayload<USER_TYPES.SIGN_OUT_SUCCESS>;
export type UserSignOutFail = ActionWithPayload<
  USER_TYPES.SIGN_OUT_FAIL,
  Error
>;

export type UserSignUpStart = ActionWithPayload<
  USER_TYPES.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>;
export type UserSignUpSuccess = ActionWithPayload<
  USER_TYPES.SIGN_UP_SUCCESS,
  { currentUser: any; displayName: string }
>;
export type UserSignUpFail = ActionWithPayload<USER_TYPES.SIGN_UP_FAIL, Error>;

export const checkUserSession = (): UserCheckSession => {
  return { type: USER_TYPES.CHECK_USER_SESSION };
};
export const googleSignInStart = (): UserGoogleSignInStart => {
  return { type: USER_TYPES.GOOGLE_SIGN_IN_START };
};
export const emailSignInStart = (
  email: string,
  password: string
): UserEmailSignInStart => {
  return { type: USER_TYPES.EMAIL_SIGN_IN_START, payload: { email, password } };
};
export const signInSuccess = (user: any): UserSignInSuccess => {
  return { type: USER_TYPES.SIGN_IN_SUCCESS, payload: user };
};
export const signInFail = (error: Error): UserSignInFail => {
  return { type: USER_TYPES.SIGN_IN_FAIL, payload: error };
};
export const signOutStart = (): UserSignOutStart => {
  return { type: USER_TYPES.SIGN_OUT };
};

export const signOutSuccess = (): UserSignOutSuccess => {
  return { type: USER_TYPES.SIGN_OUT_SUCCESS };
};
export const signOutFail = (error: Error): UserSignOutFail => {
  return { type: USER_TYPES.SIGN_OUT_FAIL, payload: error };
};

export const signUpStart = (
  email: string,
  password: string,
  displayName: string
): UserSignUpStart => {
  return {
    type: USER_TYPES.SIGN_UP_START,
    payload: { email, password, displayName },
  };
};

export const signUpSuccess = (
  user: any,
  displayName: string
): UserSignUpSuccess => {
  return {
    type: USER_TYPES.SIGN_UP_SUCCESS,
    payload: { currentUser: user, displayName },
  };
};
export const signUpFail = (error: Error): UserSignUpFail => {
  return {
    type: USER_TYPES.SIGN_UP_FAIL,
    payload: error,
  };
};
