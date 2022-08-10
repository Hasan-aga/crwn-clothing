import "./cart-dropdown.style.scss";
import CustomButton from "../custom-button/custom-button.component";
const CartDropdown = (props) => {
  return props.active ? (
    <div className={`cart-dropdown-container`}>
      <div className="cart-items"></div>
      <CustomButton label="go to checkout" />
    </div>
  ) : (
    ""
  );
};

export default CartDropdown;
