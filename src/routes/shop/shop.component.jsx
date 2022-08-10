import SHOP_DATA from "../../assets/shop-data.json";

const Shop = () => {
  return (
    <div>
      {SHOP_DATA.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default Shop;
