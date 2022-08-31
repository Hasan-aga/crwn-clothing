import "./custom-button.style";
import { BasicButton } from "./custom-button.style";
import { ButtonHTMLAttributes, FC } from "react";

export type ButtonProps = {
  label?: string;
  productButton?: boolean;
  signUpButton?: boolean;
  signInGoogleButton?: boolean;
  otherProps?: any[];
} & ButtonHTMLAttributes<HTMLButtonElement>;

const CustomButton: FC<ButtonProps> = (props) => {
  const { label, ...otherProps } = props;
  return <BasicButton {...otherProps}>{label}</BasicButton>;
};

export default CustomButton;
