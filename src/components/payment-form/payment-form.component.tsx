import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CustomButton from "../custom-button/custom-button.component";
import {
  FormContainer,
  PaymentFormContainer,
  SmallSpinner,
} from "./payemnt-form.style";
import { useState, FormEventHandler } from "react";
import {
  selectCartProducts,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selectors";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../store/cart/cart-action";
import { saveCurrentCartToHistory } from "../../store/history/history.actions";
import { useNavigate } from "react-router-dom";
import { selectHistoryBoughtItems } from "../../store/history/history.selector";
import { Checkmark } from "../checkmark/checkmark";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const currentUser = useSelector(selectCurrentUser);
  const amount = useSelector(selectCartTotal);
  const [isMakingPayment, setIsMakingPayment] = useState(false);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const dispatch = useDispatch();
  const cartProducts = useSelector(selectCartProducts);
  const existingHistoryProducts = useSelector(selectHistoryBoughtItems);
  const navigateTo = useNavigate();

  const paymentHandler: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsMakingPayment(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const cardElement = elements.getElement(CardElement);
    if (cardElement) {
      const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: currentUser ? currentUser.email : "Guest",
          },
        },
      });

      if (paymentResult.error) {
        setIsMakingPayment(false);
        alert(`Error  ${paymentResult.error}`);
      } else {
        if (paymentResult.paymentIntent.status === "succeeded") {
          setIsMakingPayment(false);
          setIsPaymentSuccessful(true);
          alert("Payment Successful");
          dispatch(
            saveCurrentCartToHistory(cartProducts, existingHistoryProducts)
          );
          dispatch(clearCart());
        }
      }
    }
  };

  const navigateToGreet = () => {
    setTimeout(() => {
      navigateTo("/greet");
    }, 1000);
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit card payment:</h2>
        <CardElement />
        {isMakingPayment ? (
          <SmallSpinner />
        ) : (
          <CustomButton
            onAnimationEnd={navigateToGreet}
            label={isPaymentSuccessful ? <Checkmark /> : "Pay now"}
          />
        )}
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
