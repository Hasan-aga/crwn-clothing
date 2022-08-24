import { BoughtProductsList, VerticalBox } from "./bought-product-list.style";

const BoughtProductList = ({ products }) => {
  if (!products) return;
  return (
    <div>
      {products.map((item) => (
        <BoughtProductsList id={item.id}>
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
