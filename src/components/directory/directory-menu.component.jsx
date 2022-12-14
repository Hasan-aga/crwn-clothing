import Category from "../category/category.component";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    title: "womens",
    imageUrl:
      "https://images.unsplash.com/photo-1598923926169-898afb437ed4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    title: "mens",
    imageUrl:
      "https://images.unsplash.com/photo-1620921597945-908e7947c41f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1634&q=80",
  },
];
const CategoryMenu = ({ category }) => {
  return categories.map((cat) => (
    <Link to={`shop/${cat.title}`} key={cat.id + cat.title}>
      <Category
        id={cat.id}
        title={cat.title}
        imageUrl={cat.imageUrl}
      ></Category>
    </Link>
  ));
};

export default CategoryMenu;
