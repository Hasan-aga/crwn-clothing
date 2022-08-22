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
import { selectUserError } from "../../store/user/user.selectors";

const defaultFormFields = {
  email: "",
  password: "",
  confirmPassword: "",
};

const SignIn = () => {
  const userError = useSelector(selectUserError);
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
      console.log(userError);
      setFormHint(`${userError}`);
      return;
    }
    if (!userError) navigateTo("/greet");
  };

  const dispatchSignIn = (email, password) =>
    new Promise((resolve, reject) => {
      dispatch(emailSignInStart(email, password));
      resolve();
    });

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
    dispatchSignIn(formFields.email, formFields.password).then(() =>
      handleSignInError()
    );
    resetForm();
  };

  const handleLogGoogleUser = async () => {
    dispatch(googleSignInStart());
    handleSignInError();
    // const { user } = await signInWithPop();
    // await createUserDocumentFromAuth(user);
  };

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
