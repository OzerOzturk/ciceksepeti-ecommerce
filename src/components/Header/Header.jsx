import React from "react";
import logo from "../../assets/icons/logo.svg";
import cart from "../../assets/icons/cart.svg";
import Search from "./Search";

const Header = () => {
  return (
    <header className="header container">
      <img src={logo} alt="brand__logo" />
      <Search />
      <button className="header__basket" type="button">
        <img src={cart} alt="basket__icon" className="header__basket__icon" />
        <span className="header__basket__text">Sepetim</span>
      </button>
    </header>
  );
};

export default Header;
