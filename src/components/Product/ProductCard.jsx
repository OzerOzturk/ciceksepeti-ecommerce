import React from "react";
import PropTypes from "prop-types";

const ProductCard = ({ name, delivery, price, image }) => {
  return (
    <div className="productCard">
      <img src={image} className="productCard__image" alt="product_image" />
      <main className="productCard__info">
        <p className="productCard__info__name">{name} </p>
        <p className="productCard__info__delivery">
          {delivery ? "Ücretsiz Teslimat" : ""}
        </p>
        <p className="productCard__info__price">
          <span>{price}</span>TL
        </p>
      </main>
      <button type="button" className="productCard__button">
        Sepete Ekle
      </button>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  name: PropTypes.string,
  delivery: PropTypes.boolean,
  price: PropTypes.number,
  Products: PropTypes.string,
  image: PropTypes.any,
};
