import "./sign-up.style.scss";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import {
  addUserToAuthByEmailAndPassword,
  createUserDocumentFromAuth,
  auth,
} from "../../utils/firebase/firebase.util";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const handleForm = (event) => {
    const { name, value } = event.target;
    formFields[name] = value;
    setFormFields({ ...formFields });
    console.log(formFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formFields.password !== formFields.confirmPassword) {
      console.error(`passwords dont match`);
      return;
    }

    console.log("formFields", formFields);
    try {
      const { user } = await addUserToAuthByEmailAndPassword(
        auth,
        formFields.email,
        formFields.password
      );
      const userDocRef = await createUserDocumentFromAuth(user, {
        displayName: formFields.displayName,
      });
      resetForm();
    } catch (error) {
      console.error(`failed to authenticate, ${error}`);
    }
  };

  return (
    <div className="signup-form">
      <h2>Sign up with Email and Password</h2>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          required
          type="text"
          name="displayName"
          onChange={handleForm}
          value={formFields.displayName}
        ></input>

        <label>Email</label>
        <input
          required
          type="email"
          name="email"
          onChange={handleForm}
          value={formFields.email}
        ></input>

        <label>Password</label>
        <input
          required
          type="password"
          name="password"
          onChange={handleForm}
          value={formFields.password}
        ></input>
        <label>Confirm Password</label>
        <input
          required
          type="password"
          name="confirmPassword"
          onChange={handleForm}
          value={formFields.confirmPassword}
        ></input>
        <button className="sign-up" type="submit">
          Sign Up
        </button>
        <Outlet />
      </form>
    </div>
  );
};

export default SignupForm;
