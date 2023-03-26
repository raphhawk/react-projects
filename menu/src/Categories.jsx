const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((c, idx) => {
        return (
          <button
            type="button"
            className="filter-btn"
            onClick={() => {
              filterItems(c);
            }}
            key={idx}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
