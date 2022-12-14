import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithPop,
  signUserIn,
} from "../../utils/firebase/firebase.util";
import "./sign-in.style.scss";

const defaultFormFields = {
  email: "",
  password: "",
  confirmPassword: "",
};

const SignIn = () => {
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

  const handleSubmit = async (event) => {
    setFormHint("Sign in with Email and password:");
    event.preventDefault();
    try {
      const { user } = await signUserIn(formFields.email, formFields.password);
      resetForm();
    } catch (error) {
      console.error(error);
      setFormHint(error.message);
    }
  };

  const handleLogGoogleUser = async () => {
    const { user } = await signInWithPop();
    await createUserDocumentFromAuth(user);
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
