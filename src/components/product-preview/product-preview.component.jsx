import "./product-preview.style.scss";
import { Fragment } from "react";
import ProductCard from "../product-card/product-card.component";

const ProductPreview = ({ title, products }) => {
  return (
    <Fragment>
      <h3 className="category-title"> {title}</h3>
      <div className="shop-products">
        {products.slice(0, 4).map((product) => (
          <ProductCard product={product} key={product.id + product.name} />
        ))}
      </div>
    </Fragment>
  );
};

export default ProductPreview;
