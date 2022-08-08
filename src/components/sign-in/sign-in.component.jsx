import {
  signInWithPop,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithPop();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In:</h1>
      <button onClick={logGoogleUser}>Sign In with Google</button>
    </div>
  );
};

export default SignIn;
