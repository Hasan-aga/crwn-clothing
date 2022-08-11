import { useContext, Fragment } from "react";
import ProductPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/categoriesContext";
import "./categories-preview.style.scss";

const CategoriesPreview = () => {
  const { categoryMap } = useContext(CategoriesContext);
  console.log("CategoriesPreview");
  return (
    <Fragment>
      {Object.keys(categoryMap).map((title) => {
        const products = categoryMap[title];
        return (
          <ProductPreview
            key={title}
            title={title}
            products={products}
            previewIndex="4"
          />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
