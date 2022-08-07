import "./directory-menu.style.scss";
import Category from "../category-component/category.component";

const CategoryMenu = (props) => {
  const categories = props.categories;
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <Category
          id={category.id}
          title={category.title}
          imageUrl={category.imageUrl}
        ></Category>
      ))}
    </div>
  );
};

export default CategoryMenu;
