import { useSelector } from "react-redux";
import DropdownItem from "../../components/dropDown-item/dropdown-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import {
  selectCartProducts,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import { CheckOutContianer, Total } from "./checkout.style";

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
      <PaymentForm />
    </CheckOutContianer>
  );
};

export default Checkout;
