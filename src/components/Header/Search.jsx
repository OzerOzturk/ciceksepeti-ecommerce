import React from "react";
import search from "../../assets/icons/search.svg";

const Search = () => {
  return (
    <div className="search__container">
      <img src={search} alt="search__container__icon" />
      <input
        type="text"
        className="search__container__input"
        placeholder="Ürün Ara"
      />
      <button className="search__container__button">Ara</button>
    </div>
  );
};

export default Search;
