import { ReactComponent as UpArrow } from "../../assets/up.svg";
import { ReactComponent as DownArrow } from "../../assets/down.svg";
import { CounterContainer } from "./counter.style";
import { CartProduct } from "../../store/cart/cart.types";

export type CounterProps = {
  item: CartProduct;
  incrementor: () => void;
  decrementor: () => void;
};

const Counter = (props: CounterProps) => {
  const { quantity } = props.item;
  const incrementor = props.incrementor;
  const decrementor = props.decrementor;

  return (
    <CounterContainer>
      <UpArrow
        title="Increase Quantity"
        onClick={incrementor}
        className="counter-arrow"
      />
      {quantity}
      <DownArrow
        title="Decrease Quantity"
        onClick={decrementor}
        className="counter-arrow"
      />
    </CounterContainer>
  );
};

export default Counter;
