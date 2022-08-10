import "./dropdown-item.style.scss";
import { ReactComponent as Trash } from "../../assets/trash.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
const DropdownItem = ({ item }) => {
  const { removeProductFromCart } = useContext(CartContext);
  return (
    <div className="cart-item-container">
      <img alt="item.name" src={item.imageUrl} />
      <div className="cart-item-text">
        <h3 className="item-title">{item.name}</h3>
        <span className="item-info">
          {item.quantity} X ${item.price}
        </span>
      </div>
      <div>
        <Trash
          className="trash-icon"
          onClick={() => removeProductFromCart(item)}
        />
      </div>
    </div>
  );
};

export default DropdownItem;
