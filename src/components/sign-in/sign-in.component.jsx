import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithPop,
  signUserIn,
} from "../../utils/firebase/firebase.util";
import "./sign-in.style.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../store/user/user.action";
import { useNavigate } from "react-router-dom";
import {
  selectCurrentUser,
  selectUserSignInError,
} from "../../store/user/user.selectors";
import { useEffect } from "react";

const defaultFormFields = {
  email: "",
  password: "",
  confirmPassword: "",
};

const SignIn = () => {
  const userError = useSelector(selectUserSignInError);
  const currentUser = useSelector(selectCurrentUser);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [formHint, setFormHint] = useState("Sign in with Email and password:");

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const handleForm = (event) => {
    const { name, value } = event.target;
    formFields[name] = value;
    setFormFields({ ...formFields });
  };

  const handleSignInError = () => {
    if (userError) {
      setFormHint(`${userError}`);
      return;
    }
    if (!userError && currentUser) navigateTo("/greet");
  };

  const handleSubmit = async (event) => {
    setFormHint("Sign in with Email and password:");
    event.preventDefault();
    // try {
    //   const { user } = await signUserIn(formFields.email, formFields.password);
    //   resetForm();
    // } catch (error) {
    //   console.error(error);
    //   setFormHint(error.message);
    // }
    dispatch(emailSignInStart(formFields.email, formFields.password));
    resetForm();
  };

  const handleLogGoogleUser = async () => {
    dispatch(googleSignInStart());
    // const { user } = await signInWithPop();
    // await createUserDocumentFromAuth(user);
  };

  useEffect(() => {
    handleSignInError();
  }, [userError, currentUser]);

  return (
    <div className="sign-form">
      <h2>Already have an account? </h2>
      <span
        className={`${
          formHint !== "Sign in with Email and password:" ? "error" : ""
        }`}
      >
        {" "}
        {formHint}{" "}
      </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          required
          onChange={handleForm}
          value={formFields.email}
          label="Email"
        />
        <FormInput
          name="password"
          type="password"
          required
          onChange={handleForm}
          value={formFields.password}
          label="password"
        />

        <div className="form-button-group">
          <CustomButton label={`Sign In`} signUpButton type="submit" />
          <CustomButton
            label={`Sign In with Google`}
            signInGoogleButton
            onClick={handleLogGoogleUser}
            type="button"
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
