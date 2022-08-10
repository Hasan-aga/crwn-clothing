import "./dropdown-item.style.scss";

const DropdownItem = ({ item }) => {
  return (
    <div className="cart-item-container">
      <img alt="item.name" src={item.imageUrl} />
      <div className="cart-item-text">
        <h3 className="item-title">{item.name}</h3>
        <span className="item-info">
          {item.quantity} X ${item.price}
        </span>
      </div>
    </div>
  );
};

export default DropdownItem;
