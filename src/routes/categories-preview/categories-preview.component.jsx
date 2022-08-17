import { Fragment } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
  const categoryMap = useSelector(selectCategoriesMap);
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
