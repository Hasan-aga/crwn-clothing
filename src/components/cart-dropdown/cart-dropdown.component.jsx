import "./cart-dropdown.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import { Fragment, useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import DropdownItem from "../dropDown-item/dropdown-item.component";
import { Link } from "react-router-dom";

const CartDropdown = (props) => {
  const { cartProducts } = useContext(CartContext);
  return props.active ? (
    <div className={`cart-dropdown-container`}>
      {cartProducts.length === 0 ? (
        <h4> Your cart is empty</h4>
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
    </div>
  ) : (
    <Fragment />
  );
};

export default CartDropdown;
