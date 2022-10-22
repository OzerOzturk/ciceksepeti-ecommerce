import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import ProductCard from "./ProductCard";
import leaf from "../../assets/icons/leaf.svg";
import data from "../../data/data.json";

const ProductList = () => {
  const { liveSearch, activeCategory } = useContext(CartContext);

  const renderProducts = () => {
    if (activeCategory.id === 1) {
      return (
        data &&
        data.products
          .filter((product) => product.name.toLowerCase().includes(liveSearch))
          .map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              delivery={product.freeDelivery}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          ))
      );
    } else {
      return (
        data &&
        data.products
          .filter((product) => product.name.toLowerCase().includes(liveSearch))
          .filter((product) =>
            product.category
              .map((category) => category.id)
              .includes(activeCategory.id)
          )
          .map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              delivery={product.freeDelivery}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          ))
      );
    }
  };

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
        {renderProducts().length === 0 ? (
          <p className="productList__card__noProduct">Ürün bulunamadı.</p>
        ) : (
          renderProducts()
        )}
      </main>
    </div>
  );
};

export default ProductList;
