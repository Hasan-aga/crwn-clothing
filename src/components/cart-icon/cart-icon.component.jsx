import "./cart-icon.style.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
const CartIcon = () => {
  const { cartProducts } = useContext(CartContext);
  const cartItemCount = () => {
    const count = cartProducts.reduce(
      (acc, product) => (acc += product.quantity),
      0
    );
    return count;
  };
  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemCount()}</span>
    </div>
  );
};

export default CartIcon;
