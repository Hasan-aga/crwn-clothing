import "./category-preview.style.scss";
import { Fragment } from "react";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products, previewIndex }) => {
  return (
    <Fragment>
      <div className="category-title">
        {" "}
        <span>{title}</span>
      </div>
      <div className="shop-products">
        {products.slice(0, previewIndex).map((product) => (
          <ProductCard product={product} key={product.id + product.name} />
        ))}
      </div>
    </Fragment>
  );
};

export default CategoryPreview;
