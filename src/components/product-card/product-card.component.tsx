import {
  ProductButton,
  ProductCardStyle,
  ProductText,
} from "./product-card.style";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cart/cart-action";
import { selectCartProducts } from "../../store/cart/cart.selector";
import { CategoryItem } from "../../store/categories/categories.types.js";
import { CartProduct } from "../../store/cart/cart.types.js";

type ProductCardProps = {
  product: CategoryItem;
};
const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();
  const existingProducts = useSelector(selectCartProducts);
  const addProductToCart = () => {
    const newProduct: CartProduct = { ...product, quantity: 0 };
    dispatch(addToCart(newProduct, existingProducts));
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
