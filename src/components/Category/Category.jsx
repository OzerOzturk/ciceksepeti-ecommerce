import React from "react";
import menuList from "../../assets/icons/menuList.svg";
import data from "../../data/data.json";

const Category = () => {
  return (
    <nav className="category container">
      <div className="category__title">
        <img src={menuList} alt="" className="category__title__icon" />
        <p className="category__title__text">Kategoriler</p>
      </div>
      <section className="category__detail">
        {data &&
          data.categories.map((category) => {
            return (
              <button key={category.id} className="category__detail__name">
                {category.name}
              </button>
            );
          })}
      </section>
    </nav>
  );
};

export default Category;
