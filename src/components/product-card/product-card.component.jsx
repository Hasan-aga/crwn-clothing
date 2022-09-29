import "./product-card.style.jsx";
import {
  ProductButton,
  ProductCardStyle,
  ProductText,
} from "./product-card.style.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cart/cart-action";
import { selectCartProducts } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const existingProducts = useSelector(selectCartProducts);
  const addProductToCart = () => {
    dispatch(addToCart(product, existingProducts));
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
      <ProductText>
        <p>{product.name}</p>
        <p> ${product.price}</p>
      </ProductText>
    </ProductCardStyle>
  );
};

export default ProductCard;
