import "./dropdown-item.style";
import { ReactComponent as Trash } from "../../assets/trash.svg";
import Counter from "../counter/counter.component";
import { CartItemContainer } from "./dropdown-item.style";
import {
  changeProductQuantity,
  removeProductFromCart,
} from "../../store/cart/cart-action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartProducts } from "../../store/cart/cart.selector";
import { CartProduct } from "../../store/cart/cart.types.js";
import { AnyAction } from "redux";

export type DropdownProps = {
  item: CartProduct;
  checkoutGrid?: boolean;
};

const DropdownItem = ({ item, checkoutGrid }: DropdownProps) => {
  const dispatch = useDispatch() as (arg: AnyAction | void) => AnyAction;
  const existingCartProducts = useSelector(selectCartProducts);
  const increment = () => {
    dispatch(changeProductQuantity(item, existingCartProducts));
  };
  const decrement = () => {
    dispatch(changeProductQuantity(item, existingCartProducts, false));
  };
  const removeProductHandler = () => {
    dispatch(removeProductFromCart(item, existingCartProducts));
  };
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
          <Trash className="trash-icon" onClick={removeProductHandler} />
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
          <Trash className="trash-icon" onClick={removeProductHandler} />
        </div>
      </div>
    </CartItemContainer>
  );
};

export default DropdownItem;
