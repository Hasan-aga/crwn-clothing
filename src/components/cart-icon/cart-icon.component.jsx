import "./cart-icon.style.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useSelector } from "react-redux";
import { selectCount } from "../../store/cart/cart.selector";
const CartIcon = () => {
  const cartProductsCount = useSelector(selectCount);

  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartProductsCount}</span>
    </div>
  );
};

export default CartIcon;
