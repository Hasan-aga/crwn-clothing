import "./cart-icon.style.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
const CartIcon = () => {
  const { cartProducts } = useContext(CartContext);
  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{+cartProducts.length}</span>
    </div>
  );
};

export default CartIcon;
