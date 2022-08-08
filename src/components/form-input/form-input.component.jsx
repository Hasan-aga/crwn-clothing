import "./form-input.style.scss";

const FormInput = ({ label, ...otherProps }) => {
  console.log({ ...otherProps });
  return (
    <div className="form-input-group">
      <input className="form-input" {...otherProps}></input>
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
