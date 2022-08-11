import { useContext, Fragment } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import ProductPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/categoriesContext";
import "./shop.style.scss";
const Shop = () => {
  const { categoryMap } = useContext(CategoriesContext);
  console.log("shop");
  return (
    <Fragment>
      {Object.keys(categoryMap).map((title) => {
        const products = categoryMap[title];
        return <ProductPreview key={title} title={title} products={products} />;
      })}
    </Fragment>
  );
};

export default Shop;
