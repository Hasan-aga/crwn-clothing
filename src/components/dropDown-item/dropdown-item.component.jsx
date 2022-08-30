import "./dropdown-item.style.jsx";
import { ReactComponent as Trash } from "../../assets/trash.svg";
import Counter from "../counter/counter.component";
import { CartItemContainer } from "./dropdown-item.style.jsx";
import {
  changeProductQuantity,
  removeProductFromCart,
} from "../../store/cart/cart-action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartProducts } from "../../store/cart/cart.selector";

const DropdownItem = ({ item, checkoutGrid }) => {
  const dispatch = useDispatch();
  const existingCartProducts = useSelector(selectCartProducts);
  const increment = () =>
    dispatch(changeProductQuantity(item, existingCartProducts));
  const decrement = () =>
    dispatch(changeProductQuantity(item, existingCartProducts, false));
  const removeProductHandler = () =>
    dispatch(removeProductFromCart(item, existingCartProducts));
  return checkoutGrid ? (
    <CartItemContainer checkoutItem>
      <img alt="item.name" src={item.imageUrl} />
      <div className="cart-item-text">
        <h3 className="item-title">{item.name}</h3>
        <div className="tools-container">
          <span className="item-info">
            <Counter
              item={item}
              incrementor={increment}
              decrementor={decrement}
            />
          </span>
          <span className="item-info">&#10539; </span>
          <span className="item-info">${item.price}</span>
          <Trash
            className="trash-icon"
            onClick={removeProductHandler}
            title="Delete"
          />
        </div>
      </div>
    </CartItemContainer>
  ) : (
    <CartItemContainer>
      <img alt="item.name" src={item.imageUrl} />
      <div className="cart-item-text">
        <h3 className="item-title">{item.name}</h3>
        <div className="tools-container">
          <span className="item-info">
            <Counter
              item={item}
              incrementor={increment}
              decrementor={decrement}
            />
          </span>
          <span className="item-info">&#10539; </span>
          <span className="item-info">${item.price}</span>
          <Trash
            className="trash-icon"
            onClick={removeProductHandler}
            title="Delete"
          />
        </div>
      </div>
    </CartItemContainer>
  );
};

export default DropdownItem;
