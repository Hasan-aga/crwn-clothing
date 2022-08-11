import { useContext, Fragment } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categoriesContext";
import "./shop.style.scss";
const Shop = () => {
  const { categoryMap } = useContext(CategoriesContext);
  console.log("shop");
  return (
    <Fragment>
      {Object.keys(categoryMap).map((title) => {
        return (
          <Fragment key={title}>
            <h3 className="category-title"> {title}</h3>
            <div className="shop-products">
              {categoryMap[title].map((product) => (
                <ProductCard
                  product={product}
                  key={product.id + product.name}
                />
              ))}
            </div>
          </Fragment>
        );
      })}
    </Fragment>
    // <Fragment>
    //   {Object.keys(categoryMap).map((title) => (
    //     <Fragment>
    //       <h3>{title}</h3>
    //       <div className="shop-products">
    //         {categoryMap.title.map((product) => (
    //           <ProductCard product={product} key={product.id + product.name} />
    //         ))}
    //       </div>
    //     </Fragment>
    //   ))}
    // </Fragment>
  );
};

export default Shop;
