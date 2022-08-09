import {
  signInWithPop,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";
import CustomButton from "../Custom-button/custom-button.component";
import "./sign-in.style.scss";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithPop();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <CustomButton
      label={`Sign In with Google`}
      className=" sign-in-google-button"
      onClick={logGoogleUser}
    />
  );
};

export default SignIn;
