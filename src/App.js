import "./categories.styles.scss";

const App = () => {
  const categories = [
    { id: 1, title: "Hats" },
    { id: 2, title: "Jackets" },
    { id: 3, title: "Bags" },
    { id: 4, title: "Shoes" },
    { id: 5, title: "Mens" },
    { id: 6, title: "Womens" },
  ];
  return (
    <div className="categories-container">
      {categories.map(({ id, title }) => (
        <div key={id} className="category">
          <div className="category-background" />
          {/* <img/> */}
          <div className="category-body">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
