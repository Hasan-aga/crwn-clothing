import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductsContext } from "../../contexts/productsContext";
import "./shop.style.scss";
const Shop = () => {
  const { products, setProducts } = useContext(ProductsContext);
  return (
    <div className="shop-products">
      {products.map((product) => (
        <ProductCard product={product} key={product.id + product.name} />
      ))}
    </div>
  );
};

export default Shop;
