import DropdownItem from "../../components/dropDown-item/dropdown-item.component";
import "./checkout.style.jsx";
import { CartContext } from "../../contexts/cartContext";
import { useContext } from "react";
import { CheckOutContianer, Total } from "./checkout.style.jsx";

const Checkout = () => {
  const { cartProducts, cartTotal } = useContext(CartContext);

  return (
    <CheckOutContianer>
      {cartProducts.map((product) => (
        // TODO: refactor reusable css below
        <DropdownItem checkoutGrid key={product.id} item={product} />
      ))}
      <Total>
        <h3> Total =${cartTotal}</h3>
      </Total>
    </CheckOutContianer>
  );
};

export default Checkout;
