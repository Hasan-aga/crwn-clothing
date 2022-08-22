import "./sign-up.style.scss";
import { useState } from "react";
import {
  addUserToAuthByEmailAndPassword,
  createUserDocumentFromAuth,
  auth,
} from "../../utils/firebase/firebase.util";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { useDispatch, useSelector } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
import { useNavigate } from "react-router-dom";
import { selectUserError } from "../../store/user/user.selectors";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupForm = () => {
  const userError = useSelector(selectUserError);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [formHint, setFormHint] = useState("Sign up with Email and Password:");

  const resetForm = () => {
    setFormFields(defaultFormFields);
    setFormHint("Sign up with Email and Password:");
  };

  const handleForm = (event) => {
    const { name, value } = event.target;
    formFields[name] = value;
    setFormFields({ ...formFields });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    resetForm();
    dispatch(
      signUpStart(formFields.email, formFields.password, formFields.displayName)
    );
    if (userError) {
      console.log(userError);
      setFormHint(`${userError}`);
      return;
    }
    if (!userError) navigateTo("/greet");
    // try {
    //   if (formFields.password !== formFields.confirmPassword) {
    //     throw new Error(`pAsSwOrDs dont match`);
    //   }

    //   const { user } = await addUserToAuthByEmailAndPassword(
    // formFields.email,
    // formFields.password
    //   );

    //   await createUserDocumentFromAuth(user, {
    //     displayName: formFields.displayName,
    //   });
    //   resetForm();
    // } catch (error) {
    //   console.error(`failed to authenticate, ${error.message}`);
    //   setFormHint(error.message);
    // }
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
          autoComplete="username"
          required
          onChange={handleForm}
          value={formFields.displayName}
          label="Display Name"
          minLength="5"
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
          minLength="6"
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
