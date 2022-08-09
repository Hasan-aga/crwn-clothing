import CustomButton from "../Custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithPop,
} from "../../utils/firebase/firebase.util";
import "./sign-in.style.scss";

const defaultFormFields = {
  email: "",
  password: "",
  confirmPassword: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const handleForm = (event) => {
    const { name, value } = event.target;
    formFields[name] = value;
    setFormFields({ ...formFields });
    console.log(formFields);
  };

  const handleSubmit = () => {
    console.log(`signing in with email= ${formFields.email}`);
  };

  const handleLogGoogleUser = async () => {
    const { user } = await signInWithPop();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in-form">
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
          value={formFields.email}
          label="password"
        />
        <FormInput
          name="confirmPassowrd"
          type="confirmPassowrd"
          required
          onChange={handleForm}
          value={formFields.email}
          label="confirm passowrd"
        />
        <CustomButton label={`Sign In`} type="submit" />
        <CustomButton
          label={`Sign In with Google`}
          className=" sign-in-google-button"
          onClick={handleLogGoogleUser}
        />
      </form>
    </div>
  );
};

export default SignIn;
