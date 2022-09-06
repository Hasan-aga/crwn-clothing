import CustomButton from "../custom-button/custom-button.component";
import { Fragment } from "react";
import DropdownItem from "../dropDown-item/dropdown-item.component";
import { Link } from "react-router-dom";
import { DropDown, EmptyCart } from "./cart-dropdown.style";
import { selectCartProducts } from "../../store/cart/cart.selector";
import { useDispatch, useSelector } from "react-redux";
import { toggleDropdown } from "../../store/cart/cart-action";
import { useCloseDropdownOnOutsideClick } from "../../custom-hooks/useCloseDropdownOnOutsideClick";
import "./hide.style.scss";

export type CartDropdownProps = {
  active: boolean;
};

const CartDropdown = (props: CartDropdownProps) => {
  const dispatch = useDispatch();

  const closeDropdown = () => {
    dispatch(toggleDropdown(true));
  };

  const ref = useCloseDropdownOnOutsideClick(closeDropdown, props.active);

  const cartProducts = useSelector(selectCartProducts);
  return (
    <div ref={ref} className={props.active ? "" : "hide"}>
      <DropDown className="dropdown-menu">
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
    </div>
  );
};

export default CartDropdown;
