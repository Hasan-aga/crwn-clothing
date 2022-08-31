import { all, call, put, takeLatest } from "typed-redux-saga/macro";
import { USER_TYPES } from "./user.types";
import {
  AdditionalUserInfo,
  addUserToAuthByEmailAndPassword,
  createUserDocumentFromAuth,
  getCurrentUser,
  signInWithPop,
  signUserIn,
  signUserOut,
} from "../../utils/firebase/firebase.util";
import {
  signInFail,
  signInSuccess,
  signOutFail,
  signOutSuccess,
  signUpFail,
  signUpSuccess,
} from "./user.action";
import { AnyAction } from "redux";
import { User } from "firebase/auth";

function* saveUserInDatabase(
  userAuth: User,
  addtionalInfo: AdditionalUserInfo = {}
) {
  try {
    let userData = yield* call(createUserDocumentFromAuth, userAuth, {
      ...addtionalInfo,
    });

    if (userData) {
      const detailedUser =
        Object.keys(addtionalInfo).length > 0
          ? {
              ...userData.data(),
              id: userData.id,
            }
          : { ...userData?.data(), id: userData.id };
      yield* put(signInSuccess(userData.data()));
    }
  } catch (error) {
    yield* put(signInFail(error as Error));
  }
}

function* getAuthUser() {
  try {
    const user = yield* call(getCurrentUser);
    if (!user) return;
    yield* call(saveUserInDatabase, user);
  } catch (error) {
    yield* put(signInFail(error as Error));
  }
}

function* onCheckUserSession() {
  yield* takeLatest(USER_TYPES.CHECK_USER_SESSION, getAuthUser);
}

function* processGoogleSignIn() {
  try {
    const { user } = yield* call(signInWithPop);
    yield* call(saveUserInDatabase, user);
  } catch (error) {
    yield* put(signInFail(error as Error));
  }
}

function* onGoogleSignInStart() {
  try {
    yield* takeLatest(USER_TYPES.GOOGLE_SIGN_IN_START, processGoogleSignIn);
  } catch (error) {
    yield* put(signInFail(error as Error));
  }
}

function* processEmailSignIn(action: AnyAction) {
  console.log("action ", action.payload);
  const { email, password } = action.payload;
  try {
    const { user } = yield* call(signUserIn, email, password);
    yield* call(saveUserInDatabase, user);
  } catch (error) {
    yield* put(signInFail(error as Error));
  }
}

function* onEmailSignInStart() {
  yield* takeLatest(USER_TYPES.EMAIL_SIGN_IN_START, processEmailSignIn);
}

function* processSignOut() {
  try {
    yield* call(signUserOut);
    yield* call(signOutSuccess);
  } catch (error) {
    yield* put(signOutFail(error as Error));
  }
}

function* onSignOut() {
  yield* takeLatest(USER_TYPES.SIGN_OUT, processSignOut);
}

function* processSignUp(action: AnyAction) {
  const { email, password, displayName } = action.payload;
  try {
    const { user } = yield call(
      addUserToAuthByEmailAndPassword,
      email,
      password
    );
    yield* call(saveUserInDatabase, user, { displayName });
    user.displayName = displayName;
    yield* put(signUpSuccess(user));
  } catch (error) {
    yield* put(signUpFail(error as Error));
  }
}

function* onSignUpStart() {
  yield* takeLatest(USER_TYPES.SIGN_UP_START, processSignUp);
}

export function* userSaga() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onSignOut),
    call(onEmailSignInStart),
    call(onSignUpStart),
  ]);
}
