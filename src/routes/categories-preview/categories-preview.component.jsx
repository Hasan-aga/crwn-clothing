import { useContext, Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/categoriesContext";

const CategoriesPreview = () => {
  const { categoryMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoryMap).map((title) => {
        const products = categoryMap[title];
        return (
          <CategoryPreview
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
