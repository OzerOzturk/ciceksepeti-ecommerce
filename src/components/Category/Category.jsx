import React, { useContext } from "react";

import CartContext from "../../context/CartContext";
import menuList from "../../assets/icons/menuList.svg";
import data from "../../data/data.json";

const Category = () => {
  const { activeCategory, setActiveCategory, setLiveSearch } =
    useContext(CartContext);

  const handleClick = (category) => {
    setActiveCategory(category);
    setLiveSearch("");
  };

  const renderCategories = (category) => {
    if (activeCategory.id === category.id) {
      return (
        <button
          className="category__detail__name--active"
          onClick={() => handleClick(category)}
          key={category.id}
        >
          {category.name}
        </button>
      );
    } else {
      return (
        <button
          className="category__detail__name"
          onClick={() => handleClick(category)}
          key={category.id}
        >
          {category.name}
        </button>
      );
    }
  };

  return (
    <nav className="category container">
      <div className="category__title">
        <img
          src={menuList}
          alt="menu__icon"
          className="category__title__icon"
        />
        <p className="category__title__text">Kategoriler</p>
      </div>
      <section className="category__detail">
        {data && data.categories.map((category) => renderCategories(category))}
      </section>
    </nav>
  );
};

export default Category;
