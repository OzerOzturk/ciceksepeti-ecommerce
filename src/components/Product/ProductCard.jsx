import React, { useContext } from "react";
import PropTypes from "prop-types";
import CartContext from "../../context/CartContext";

const ProductCard = ({ id, name, delivery, price, image }) => {
  const { items, setItems } = useContext(CartContext);

  const addToCart = () => {
    const newItem = [...items];
    const index = newItem.findIndex((item) => item.id === id);

    //index === -1 means there isn't any product in the cart.
    if (index === -1) {
      newItem.push({
        id,
        name,
        delivery,
        price,
        image,
        count: 1,
      });
    } else {
      newItem[index].count++;
    }
    setItems(newItem);
  };

  const removeFromCart = () => {
    const newItem = [...items];
    const index = newItem.findIndex((item) => item.id === id);
    if (index !== -1) {
      newItem[index].count--;
      if (newItem[index].count === 0) {
        //splice(start, deleteCount) --> Remove 1 element at index
        newItem.splice(index, 1);
      }
    }
    setItems(newItem);
  };

  const calculateCount = () => {
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) {
      return 0;
    }
    return items[index].count;
  };

  return (
    <div className="productCard">
      <img src={image} className="productCard__image" alt="product_image" />
      <main className="productCard__info">
        <p className="productCard__info__name">{name} </p>
        <p className="productCard__info__delivery">
          {delivery ? "Ücretsiz Teslimat" : ""}
        </p>
        <p className="productCard__info__price">
          <span>{price} </span>TL
        </p>
      </main>

      {calculateCount() > 0 ? (
        <div className="productCard__buttons">
          <button
            onClick={removeFromCart}
            type="button"
            className="productCard__buttons__minus"
          >
            -
          </button>
          <span>{calculateCount()}</span>
          <button
            onClick={addToCart}
            type="button"
            className="productCard__buttons__plus"
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={addToCart}
          type="button"
          className="productCard__button"
        >
          Sepete Ekle
        </button>
      )}
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  delivery: PropTypes.bool,
  price: PropTypes.number,
  Products: PropTypes.string,
  image: PropTypes.any,
};
