import "./dropdown-item.style.scss";
import { ReactComponent as Trash } from "../../assets/trash.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import Counter from "../counter/counter.component";
const DropdownItem = ({ item }) => {
  const { removeProductFromCart } = useContext(CartContext);
  return (
    <div className="cart-item-container">
      <img alt="item.name" src={item.imageUrl} />
      <div className="cart-item-text">
        <h3 className="item-title">{item.name}</h3>
        <div className="tools-container">
          <span className="item-info">
            <Counter quantity={item.quantity} />
          </span>
          <span className="item-info">&#10539; ${item.price}</span>
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
