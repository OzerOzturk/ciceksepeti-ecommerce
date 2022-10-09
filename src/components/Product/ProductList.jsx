import React from "react";
import ProductCard from "./ProductCard";
import leaf from "../../assets/icons/leaf.svg";
import data from "../../data/data.json";

const ProductList = () => {
  return (
    <div className="productList container">
      <div className="productList__heading">
        <img
          src={leaf}
          alt="leaf_icon"
          className="productList__heading__image"
        />
        <h2 className="productList__heading__text">Tüm Kategoriler</h2>
      </div>
      <main className="productList__card">
        {data &&
          data.products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                delivery={product.freeDelivery}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            );
          })}
      </main>
    </div>
  );
};

export default ProductList;
