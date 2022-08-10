import "./sign-up.style.scss";
import { useState } from "react";
import {
  addUserToAuthByEmailAndPassword,
  createUserDocumentFromAuth,
  auth,
} from "../../utils/firebase/firebase.util";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [formHint, setFormHint] = useState("Sign up with Email and Password:");

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const handleForm = (event) => {
    const { name, value } = event.target;
    formFields[name] = value;
    setFormFields({ ...formFields });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formFields.password !== formFields.confirmPassword) {
      throw new Error(`passwords dont match`);
    }

    try {
      const { user } = await addUserToAuthByEmailAndPassword(
        auth,
        formFields.email,
        formFields.password
      );

      await createUserDocumentFromAuth(user, {
        displayName: formFields.displayName,
      });
      resetForm();
    } catch (error) {
      console.error(`failed to authenticate, ${error.message}`);
      setFormHint(error.code.slice(5).split("-").join(" "));
    }
  };

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
          required
          onChange={handleForm}
          value={formFields.displayName}
          label="Display Name"
          minlength="5"
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
          minlength="6"
        />

        <FormInput
          required
          type="password"
          name="confirmPassword"
          onChange={handleForm}
          value={formFields.confirmPassword}
          label="Confirm Password"
        />
        <CustomButton
          label={`Sign Up`}
          className="sign-up-button"
          type="submit"
        />
      </form>
    </div>
  );
};

export default SignupForm;
