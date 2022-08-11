import "./counter.style.scss";
import { ReactComponent as UpArrow } from "../../assets/up.svg";
import { ReactComponent as DownArrow } from "../../assets/down.svg";

const Counter = (props) => {
  const { quantity } = props.item;
  const incrementor = props.incrementor;
  const decrementor = props.decrementor;

  console.log(quantity);
  return (
    <div className="counter-container">
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
    </div>
  );
};

export default Counter;
