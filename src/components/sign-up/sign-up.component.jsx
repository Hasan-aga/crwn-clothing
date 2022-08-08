import "./sign-up.style.scss";
import { Outlet } from "react-router-dom";

const SignupForm = () => {
  return (
    <div className="signup-form">
      <h2>Sign up with Email and Password</h2>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input required type="text"></input>

        <label>Email</label>
        <input required type="email"></input>

        <label>Password</label>
        <input required type="password"></input>
        <label>Confirm Password</label>
        <input required type="password"></input>
        <button className="sign-up" type="submit">
          Sign Up
        </button>
        <Outlet />
      </form>
    </div>
  );
};

export default SignupForm;
