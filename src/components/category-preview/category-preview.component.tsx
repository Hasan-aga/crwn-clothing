import "./category-preview.style.jsx";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import { CategoryTitle, ShopProducts } from "./category-preview.style.jsx";

type CategoryPreviewProps = {
  title: string;
  products: any[];
  previewIndex?: number;
};

const CategoryPreview = ({
  title,
  products,
  previewIndex,
}: CategoryPreviewProps) => {
  return (
    <Fragment>
      <CategoryTitle>
        {previewIndex ? (
          <Link to={title}>
            <span>{title}</span>
          </Link>
        ) : (
          <span>{title}</span>
        )}
      </CategoryTitle>
      <ShopProducts>
        {products &&
          products
            .slice(0, previewIndex)
            .map((product) => (
              <ProductCard product={product} key={product.id + product.name} />
            ))}
      </ShopProducts>
    </Fragment>
  );
};

export default CategoryPreview;
