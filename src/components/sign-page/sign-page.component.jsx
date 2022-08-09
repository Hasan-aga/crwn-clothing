import SignIn from "../sign-in/sign-in.component";
import SignupForm from "../sign-up/sign-up.component";
import "./sign-page.style.scss";

const SignPage = () => {
  return (
    <div className="sign-page">
      <SignIn />
      <SignupForm />
    </div>
  );
};

export default SignPage;
