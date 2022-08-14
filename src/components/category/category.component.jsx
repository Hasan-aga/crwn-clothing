import { CategoryCard } from "./category.style";
const Category = ({ id, title, imageUrl }) => {
  return (
    <CategoryCard>
      <div
        className="category-background"
        style={{ backgroundImage: `URL(${imageUrl})` }}
      />
      {/* <img/> */}
      <div className="category-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </CategoryCard>
  );
};

export default Category;
