import { FormInputGroup } from "./form-input.style";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <FormInputGroup>
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          shrink={otherProps ? "true" : "false"}
          className={`form-input-label`}
        >
          {label}
        </label>
      )}
    </FormInputGroup>
  );
};

export default FormInput;
