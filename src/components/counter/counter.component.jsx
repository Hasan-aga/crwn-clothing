import "./counter.style.scss";
import { ReactComponent as UpArrow } from "../../assets/up.svg";
import { ReactComponent as DownArrow } from "../../assets/down.svg";

const Counter = (props) => {
  return (
    <div className="counter-container">
      <UpArrow className="counter-arrow" />
      {props.quantity}
      <DownArrow className="counter-arrow" />
    </div>
  );
};

export default Counter;
