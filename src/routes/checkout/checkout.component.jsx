import { useSelector } from "react-redux";
import DropdownItem from "../../components/dropDown-item/dropdown-item.component";
import {
  selectCartProducts,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import "./checkout.style.jsx";
import { CheckOutContianer, Total } from "./checkout.style.jsx";

const Checkout = () => {
  const cartTotal = useSelector(selectCartTotal);
  const cartProducts = useSelector(selectCartProducts);
  return (
    <CheckOutContianer>
      {cartProducts.map((product) => (
        <DropdownItem checkoutGrid key={product.id} item={product} />
      ))}
      <Total>
        <h3> Total =${cartTotal}</h3>
      </Total>
    </CheckOutContianer>
  );
};

export default Checkout;
