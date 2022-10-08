import React from "react";

const BreadCrumb = () => {
  return (
    <div className="breadcrumb container">
      <p>
        CicekSepeti Market {">"} Istanbul {">"}
        <span className="breadcrumb__category">Tüm Kategoriler</span>
      </p>
    </div>
  );
};

export default BreadCrumb;
