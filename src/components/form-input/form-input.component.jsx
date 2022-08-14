import { FormInputGroup } from "./form-input.style";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <FormInputGroup>
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </FormInputGroup>
  );
};

export default FormInput;
