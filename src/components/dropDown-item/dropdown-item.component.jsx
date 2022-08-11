import "./dropdown-item.style.scss";
import { ReactComponent as Trash } from "../../assets/trash.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import Counter from "../counter/counter.component";
const DropdownItem = ({ item }) => {
  const { removeProductFromCart, changeProductQuantity } =
    useContext(CartContext);

  const increment = () => changeProductQuantity(item);
  const decrement = () => changeProductQuantity(item, false);
  return (
    <div className="cart-item-container">
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
            onClick={() => removeProductFromCart(item)}
            title="Delete"
          />
        </div>
      </div>
    </div>
  );
};

export default DropdownItem;
