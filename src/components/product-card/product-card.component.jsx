import CustomButton from "../Custom-button/custom-button.component";
import "./product-card.style.scss";

const ProductCard = ({ product }) => {
  return (
    <div className="product-container" key={product.id}>
      <CustomButton label="add to cart" className={"product-button"} />
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
