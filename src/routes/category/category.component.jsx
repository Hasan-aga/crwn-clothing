import { useState, useEffect } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

const Category = () => {
  console.log("render/re-render category component");
  const { category } = useParams();
  const categoryMap = useSelector(selectCategoriesMap);
  const [currentCategoryProducts, setCurrentCategoryProducts] = useState(
    categoryMap[category]
  );

  useEffect(() => {
    console.log("useEffect sets the current products");
    setCurrentCategoryProducts(categoryMap[category]);
  }, [category, categoryMap]);

  return currentCategoryProducts ? (
    <div className="category-full">
      <CategoryPreview
        key={category}
        title={"Our collection of " + category}
        products={currentCategoryProducts}
      />
    </div>
  ) : (
    <h3>fetching...</h3>
  );
};

export default Category;
