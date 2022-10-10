import { createContext, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [liveSearch, setLiveSearch] = useState("");

  return (
    <CartContext.Provider
      value={{ items, setItems, liveSearch, setLiveSearch }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContext;
