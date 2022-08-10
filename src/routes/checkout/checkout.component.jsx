import DropdownItem from "../../components/dropDown-item/dropdown-item.component";
import "./checkout.style.scss";
import { CartContext } from "../../contexts/cartContext";
import { useContext } from "react";

const Checkout = () => {
  const { cartProducts } = useContext(CartContext);

  return (
    <div className="checkout-container">
      {cartProducts.map((product) => (
        <DropdownItem key={product.id} item={product} />
      ))}
    </div>
  );
};

export default Checkout;
