import {
  signInWithPop,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";
import "./sign-in.style.scss";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithPop();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <button className="sign-in-google" onClick={logGoogleUser}>
      Sign In with Google
    </button>
  );
};

export default SignIn;
