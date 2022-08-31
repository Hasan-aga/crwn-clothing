import "./sign-up.style.scss";
import { FormEvent, ChangeEvent, useEffect, useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { useDispatch, useSelector } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
import { useNavigate } from "react-router-dom";
import {
  selectCurrentUser,
  selectUserSignUpError,
} from "../../store/user/user.selectors";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupForm = () => {
  const userSignupError = useSelector(selectUserSignUpError);
  const currentUser = useSelector(selectCurrentUser);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [formHint, setFormHint] = useState("Sign up with Email and Password:");

  const resetForm = () => {
    setFormFields(defaultFormFields);
    setFormHint("Sign up with Email and Password:");
  };

  const handleForm = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    resetForm();
    dispatch(
      signUpStart(formFields.email, formFields.password, formFields.displayName)
    );
  };

  const handleSignInError = () => {
    if (userSignupError) {
      setFormHint(`${userSignupError}`);
      return;
    }
    if (!userSignupError && currentUser) navigateTo("/greet");
  };

  useEffect(() => {
    handleSignInError();
  }, [userSignupError, currentUser]);

  return (
    <div className="sign-form">
      <h2>Don't have an account?</h2>
      <span
        className={`${
          formHint !== "Sign up with Email and Password:" ? "error" : ""
        }`}
      >
        {" "}
        {formHint}{" "}
      </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          autoComplete="username"
          required
          onChange={handleForm}
          value={formFields.displayName}
          label="Display Name"
          minLength={4}
        />

        <FormInput
          required
          type="email"
          name="email"
          onChange={handleForm}
          value={formFields.email}
          label="Email"
        />

        <FormInput
          required
          type="password"
          name="password"
          onChange={handleForm}
          value={formFields.password}
          label="Password"
          minLength={6}
        />

        <FormInput
          required
          type="password"
          name="confirmPassword"
          onChange={handleForm}
          value={formFields.confirmPassword}
          label="Confirm Password"
        />
        <CustomButton label={`Sign Up`} signUpButton type="submit" />
      </form>
    </div>
  );
};

export default SignupForm;
