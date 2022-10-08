import React from "react";
import logo from "../../assets/icons/logo.svg";
import cart from "../../assets/icons/cart.svg";
import flash from "../../assets/icons/flash.svg";
import Search from "./Search";

const Header = () => {
  return (
    <header className="header container">
      <img src={logo} alt="brand__logo" />
      <Search />
      <button className="header__basket" type="button">
        <section className="header__basket__top">
          <img src={cart} alt="icon" className="header__basket__top__icon" />
          <p className="header__basket__top__text">Sepetim</p>
          <mark className="header__basket__top__number">0</mark>
        </section>
        <section className="header__basket__bottom">
          <p className="header__basket__bottom__text">
            <img src={flash} alt="" />
            <span className="header__basket__bottom__text__price">500 TL</span>
            ürün daha ekleyin kargo bedava
          </p>
          <p className="header__basket__bottom__bar"></p>
        </section>
      </button>
    </header>
  );
};

export default Header;
