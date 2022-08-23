import { CardElement } from "@stripe/react-stripe-js";
import CustomButton from "../custom-button/custom-button.component";
import { FormContainer, PaymentFormContainer } from "./payemnt-form.style";

const PaymentForm = () => {
  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit card payment:</h2>
        <CardElement />
        <CustomButton label={`Pay now`} />
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
