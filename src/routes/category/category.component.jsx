import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../contexts/categoriesContext";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useParams } from "react-router-dom";

const Category = () => {
  const { category } = useParams();
  const { categoryMap } = useContext(CategoriesContext);
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
      ;
    </div>
  ) : (
    <h3>fetching...</h3>
  );
};

export default Category;
