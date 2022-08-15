import CustomButton from "../custom-button/custom-button.component";
import "./product-card.style.jsx";
import { CartContext } from "../../contexts/cartContext";
import { useContext } from "react";
import { ProductButton, ProductCardStyle } from "./product-card.style.jsx";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const addProductToCart = () => {
    addToCart(product);
  };

  return (
    <ProductCardStyle>
      <ProductButton
        productButton
        label="add to cart"
        onClick={addProductToCart}
      />
      <img
        className="product-image"
        src={product.imageUrl}
        alt={product.name}
      />
      <div className="product-text">
        <p>{product.name}</p>
        <p> {product.price}</p>
      </div>
    </ProductCardStyle>
  );
};

export default ProductCard;
