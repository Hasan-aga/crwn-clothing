import "./custom-button.style.scss";

const CustomButton = ({ label, className, ...otherProps }) => {
  return (
    <button {...otherProps} className={`customButton ${className}`}>
      {label}
    </button>
  );
};

export default CustomButton;
