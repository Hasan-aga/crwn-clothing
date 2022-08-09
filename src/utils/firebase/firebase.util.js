// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK_lT-OIxhKYRZN5K5sNNmhXi4HaZan2g",
  authDomain: "crwn-shopping-11cdb.firebaseapp.com",
  projectId: "crwn-shopping-11cdb",
  storageBucket: "crwn-shopping-11cdb.appspot.com",
  messagingSenderId: "703278247267",
  appId: "1:703278247267:web:f21ee6978967ca46a07756",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithPop = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  addtionaInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userData = await getDoc(userDocRef);
  console.log(userData.exists());

  //   if user doc exists, return the ref
  if (userData.exists()) {
    console.log("user exists");
    return userDocRef;
  }

  // if user has no doc, create one
  const { displayName, email } = userAuth;
  const createdAt = new Date();
  console.log("user does not exists, creating new user", displayName, email);

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
      ...addtionaInformation,
    });
  } catch (error) {
    console.error(`problem creating a new user, ${error.message}`);
  }
};

export const addUserToAuthByEmailAndPassword = async (
  auth,
  email,
  password
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signUserIn = async (email, password) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredentials;
  } catch (error) {
    if (error.code === "auth/user-not-found") {
      throw new Error(`no user with such credential was found!`);
    }
    if (error.code === "auth/wrong-password")
      throw new Error("Wrong password!");
    throw new Error(`failed to sign in, ${error}`);
  }
};
