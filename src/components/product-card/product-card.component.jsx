import CustomButton from "../custom-button/custom-button.component";
import "./product-card.style.scss";
import { CartContext } from "../../contexts/cartContext";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { cartProducts, setCartProducts } = useContext(CartContext);

  const addToCart = () => {
    cartProducts.forEach((p) => console.log(p));
    console.log(`adding ${product.name} to ${cartProducts}`);
    if (!cartProducts) setCartProducts([{ quantity: 1, ...product }]);

    if (!cartProducts.some((element) => product.name === element.name))
      cartProducts.push({ quantity: 1, ...product });
    else {
      const existingProduct = cartProducts.find(
        (element) => element.name === product.name
      );
      existingProduct.quantity += 1;
      setCartProducts(cartProducts);
    }
  };

  return (
    <div className="product-container">
      <CustomButton
        label="add to cart"
        className={"product-button"}
        onClick={addToCart}
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
