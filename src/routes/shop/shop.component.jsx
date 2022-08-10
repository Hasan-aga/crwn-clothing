import { useContext } from "react";
import { ProductsContext } from "../../contexts/productsContext";

const Shop = () => {
  const { products, setProducts } = useContext(ProductsContext);
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default Shop;
