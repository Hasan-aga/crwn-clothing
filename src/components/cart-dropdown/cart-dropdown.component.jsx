import CustomButton from "../custom-button/custom-button.component";
import { Fragment } from "react";
import DropdownItem from "../dropDown-item/dropdown-item.component";
import { Link } from "react-router-dom";
import { DropDown, EmptyCart } from "./cart-dropdown.style.jsx";
import { selectCartProducts } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";

const CartDropdown = (props) => {
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
            <CustomButton className="cart-button" label="go to checkout" />
          </Link>
        </Fragment>
      )}
    </DropDown>
  ) : (
    <Fragment />
  );
};

export default CartDropdown;
