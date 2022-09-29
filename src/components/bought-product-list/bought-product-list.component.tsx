import { CartProduct } from "../../store/cart/cart.types";
import { BoughtProductsList, VerticalBox } from "./bought-product-list.style";
type BoughtProductListProps = {
  products: CartProduct[];
};
const BoughtProductList = ({ products }: BoughtProductListProps) => {
  if (!products) return <></>;
  return (
    <div>
      {products.map((item) => (
        <BoughtProductsList key={item.id}>
          <VerticalBox>
            <h4>{item.name}</h4>
            <span>
              cost: ${item.quantity * item.price} ({item.quantity} x $
              {item.price})
            </span>
          </VerticalBox>
          <img src={item.imageUrl} alt={item.name} />
        </BoughtProductsList>
      ))}
    </div>
  );
};

export default BoughtProductList;
