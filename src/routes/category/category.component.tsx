import { useState, useEffect } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCategoriesAreFetching,
  selectCategoriesMap,
} from "../../store/categories/categories.selector";
import Spinner from "../../components/spinner/spinner.component";

type CategoryRouteParameters = {
  category: string;
};

const Category = () => {
  const { category } = useParams() as CategoryRouteParameters;
  const categoryMap = useSelector(selectCategoriesMap);
  const isFetchingCategories = useSelector(selectCategoriesAreFetching);
  const [currentCategoryProducts, setCurrentCategoryProducts] = useState(
    categoryMap[category]
  );

  useEffect(() => {
    setCurrentCategoryProducts(categoryMap[category]);
  }, [category, categoryMap]);

  return !isFetchingCategories ? (
    <div className="category-full">
      <CategoryPreview
        key={category}
        title={"Our collection of " + category}
        products={currentCategoryProducts}
      />
    </div>
  ) : (
    <Spinner />
  );
};

export default Category;
