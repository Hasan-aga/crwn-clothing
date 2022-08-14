import Category from "../category/category.component";

const CategoryMenu = ({ category }) => {
  return (
    <Category
      id={category.id}
      title={category.title}
      imageUrl={category.imageUrl}
    ></Category>
  );
};

export default CategoryMenu;
