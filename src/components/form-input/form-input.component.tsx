import { FormInputGroup, FormInputLabel } from "./form-input.style";
import { InputHTMLAttributes, FC } from "react";

export type FormInputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <FormInputGroup>
      <input className="form-input" {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={otherProps ? true : false}
          className={`form-input-label`}
        >
          {label}
        </FormInputLabel>
      )}
    </FormInputGroup>
  );
};

export default FormInput;
