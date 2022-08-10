import CustomButton from "../custom-button/custom-button.component";
import "./product-card.style.scss";
import { CartContext } from "../../contexts/cartContext";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const addProductToCart = () => addToCart(product);

  return (
    <div className="product-container">
      <CustomButton
        label="add to cart"
        className={"product-button"}
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
    </div>
  );
};

export default ProductCard;
