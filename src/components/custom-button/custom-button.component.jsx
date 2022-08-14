import "./custom-button.style.jsx";
import { BasicButton } from "./custom-button.style.jsx";
// const BUTTON_STYLES = {
//   customButton: BasicButton,
//   "sign-up-button": SignupButton,
//   " sign-in-google-button": GoogleSignin,
// };

const CustomButton = (props) => {
  const { label, ...otherProps } = props;
  return <BasicButton {...otherProps}>{label}</BasicButton>;
};

export default CustomButton;
