import React, { useContext, useState } from "react";
import searchIcon from "../../assets/icons/search.svg";
import CartContext from "../../context/CartContext";

const Search = () => {
  const { setLiveSearch } = useContext(CartContext);
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = () => {
    if (search.length === 0) {
      setLiveSearch("");
      return;
    }
    if (search.length < 3) {
      return;
    }
    setLiveSearch(search);
    setSearch("");
  };

  return (
    <div className="search__container">
      <img src={searchIcon} alt="search__container__icon" />
      <input
        onChange={handleSearch}
        value={search}
        type="text"
        className="search__container__input"
        placeholder="Ürün Ara"
      />
      <button onClick={handleSubmit} className="search__container__button">
        Ara
      </button>
    </div>
  );
};

export default Search;
