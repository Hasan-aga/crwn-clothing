import CustomButton from "../custom-button/custom-button.component";
import { Fragment } from "react";
import DropdownItem from "../dropDown-item/dropdown-item.component";
import { Link } from "react-router-dom";
import { DropDown, EmptyCart } from "./cart-dropdown.style.jsx";
import { selectCartProducts } from "../../store/cart/cart.selector";
import { useDispatch, useSelector } from "react-redux";
import { toggleDropdown } from "../../store/cart/cart-action";

const CartDropdown = (props) => {
  const dispatch = useDispatch();

  const closeDropdown = () => {
    dispatch(toggleDropdown(true));
  };

  const cartProducts = useSelector(selectCartProducts);
  return props.active ? (
    <DropDown>
      {cartProducts.length === 0 ? (
        <EmptyCart>
          <span>Your cart is empty</span>
        </EmptyCart>
      ) : (
        <Fragment>
          <div className="cart-items">
            {cartProducts.map((product) => (
              <DropdownItem key={product.id} item={product} />
            ))}
          </div>

          <Link to="/checkout">
            <div>
              <CustomButton
                onClick={closeDropdown}
                className="cart-button"
                label="go to checkout"
              />
            </div>
          </Link>
        </Fragment>
      )}
    </DropDown>
  ) : (
    <Fragment />
  );
};

export default CartDropdown;
