import React from "react";

function CategoryFilter({ categories, handleFilterClick, categoryFilter }) {


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category)=>{return <button onClick={handleFilterClick} value={category} key={category} className={categoryFilter===category? "selected": ""} >{category}</button>})}
    </div>
  );
}

export default CategoryFilter;