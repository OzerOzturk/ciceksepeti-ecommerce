import { createContext, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [liveSearch, setLiveSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState({
    id: 1,
    name: "Tüm Kategoriler",
  });

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        liveSearch,
        setLiveSearch,
        activeCategory,
        setActiveCategory,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContext;
