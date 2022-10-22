import React, { useContext } from "react";
import CartContext from "../../context/CartContext";

const BreadCrumb = () => {
  const { activeCategory } = useContext(CartContext);

  return (
    <div className="breadcrumb container">
      <a href="/">CicekSepeti Market {">"} </a>
      <a href="/">Istanbul {">"}</a>
      <a href="/">
        <span className="breadcrumb__category">{activeCategory.name} </span>
      </a>
    </div>
  );
};

export default BreadCrumb;
