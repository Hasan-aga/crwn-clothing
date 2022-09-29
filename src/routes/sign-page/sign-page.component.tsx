import SignIn from "../../components/sign-in/sign-in.component";
import SignupForm from "../../components/sign-up/sign-up.component";
import { SignPageComponent } from "./sign-page.style";

const SignPage = () => {
  return (
    <SignPageComponent>
      <SignIn />
      <SignupForm />
    </SignPageComponent>
  );
};

export default SignPage;
