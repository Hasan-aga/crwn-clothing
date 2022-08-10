import "./dropdown-item.style.scss";

const DropdownItem = ({ item }) => {
  return (
    <div className="cart-item-container">
      <img alt="item.name" src={item.imageUrl} />
      <div className="cart-item-text">
        <span className="item-title">{item.name}</span>
        <span className="item-info">{item.price}</span>
        <span className="item-info">{item.quantity}</span>
      </div>
    </div>
  );
};

export default DropdownItem;
