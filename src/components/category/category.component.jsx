import "./category.style.scss";
const Category = ({ id, title, imageUrl }) => {
  return (
    <div key={id} className="category">
      <div
        className="category-background"
        style={{ backgroundImage: `URL(${imageUrl})` }}
      />
      {/* <img/> */}
      <div className="category-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default Category;
