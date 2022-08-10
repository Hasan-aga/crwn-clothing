import "./cart-dropdown.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import { Fragment, useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import DropdownItem from "../dropDown-item/dropdown-item.component";
const CartDropdown = (props) => {
  const { cartProducts } = useContext(CartContext);
  console.log(cartProducts, "d");
  return props.active ? (
    <div className={`cart-dropdown-container`}>
      <div className="cart-items">
        {cartProducts.map((product) => (
          <DropdownItem key={product.id} item={product} />
        ))}
      </div>
      <CustomButton label="go to checkout" />
    </div>
  ) : (
    <Fragment />
  );
};

export default CartDropdown;
