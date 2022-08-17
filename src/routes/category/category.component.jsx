import { useState, useEffect } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/categories.selector";

const Category = () => {
  const { category } = useParams();
  const categoryMap = useSelector(selectCategories);
  const [currentCategoryProducts, setCurrentCategoryProducts] = useState([]);

  useEffect(() => {
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
