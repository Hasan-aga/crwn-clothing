import "./sign-up.style.scss";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const handleForm = (event) => {
    const { name, value } = event.target;
    formFields[name] = value;
    setFormFields({ ...formFields });
    console.log(formFields);
  };

  return (
    <div className="signup-form">
      <h2>Sign up with Email and Password</h2>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input
          required
          type="text"
          name="displayName"
          onChange={handleForm}
        ></input>

        <label>Email</label>
        <input required type="email" name="email" onChange={handleForm}></input>

        <label>Password</label>
        <input
          required
          type="password"
          name="password"
          onChange={handleForm}
        ></input>
        <label>Confirm Password</label>
        <input
          required
          type="password"
          name="confirmPassword"
          onChange={handleForm}
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
