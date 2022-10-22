import React, { useContext } from "react";
import CartContext from "../../context/CartContext";

import logo from "../../assets/icons/logo.svg";
import cart from "../../assets/icons/cart.svg";
import flash from "../../assets/icons/flash.svg";

//component
import Search from "./Search";

const Header = () => {
  const { items } = useContext(CartContext);

  const calculateProductsNumber = () => {
    let count = 0;
    items.map((item) => {
      count += item.count;
    });
    return count;
  };

  const calculateProductsPrice = () => {
    let price = 0;
    items.map((item) => {
      price += Math.ceil(item.count * Math.ceil(item.price));
    });
    return price;
  };

  const calculateRemainderPrice = () => {
    const price = calculateProductsPrice();
    const remainderPrice = 500 - price;
    return remainderPrice;
  };

  const calculatePercent = () => {
    const price = calculateProductsPrice();
    const percent = Math.floor((price * 100) / 500);
    return percent;
  };

  return (
    <header className="header container">
      <a href="/">
        <img src={logo} className="header__logo" alt="brand__logo" />
      </a>
      <Search />
      <button className="header__basket" type="button">
        <section className="header__basket__top">
          <img src={cart} alt="icon" className="header__basket__top__icon" />
          <p className="header__basket__top__text">Sepetim</p>
          <mark className="header__basket__top__number">
            {calculateProductsNumber()}
          </mark>
        </section>
        <section className="header__basket__bottom">
          <p className="header__basket__bottom__text">
            {calculatePercent() < 100 ? (
              <>
                <img src={flash} alt="" />
                <span className="header__basket__bottom__text__price">
                  {calculateRemainderPrice()} TL
                </span>
                ürün daha ekleyin kargo bedava
              </>
            ) : (
              "Kargo Bedava!"
            )}
          </p>
          {calculatePercent() < 100 && (
            <p className="header__basket__bottom__bar">
              <p
                className="header__basket__bottom__bar__status"
                style={{ width: `${calculatePercent()}%` }}
              ></p>
            </p>
          )}
        </section>
      </button>
    </header>
  );
};

export default Header;
