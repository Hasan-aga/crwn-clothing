import DropdownItem from "../../components/dropDown-item/dropdown-item.component";
import "./checkout.style.scss";
import { CartContext } from "../../contexts/cartContext";
import { useContext } from "react";

const Checkout = () => {
  const { cartProducts, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      {cartProducts.map((product) => (
        <DropdownItem key={product.id} item={product} />
      ))}
      <div className="checkout-total">
        <h3> Total =${cartTotal}</h3>
      </div>
    </div>
  );
};

export default Checkout;
