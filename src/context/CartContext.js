import { createContext } from "react";
// import PropTypes from "prop-types";

const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export function CartProvider({ children }) {
  return (
    <CartContext.Provider value={{ item: 1 }}>{children}</CartContext.Provider>
  );
}

export default CartContext;

/* CartProvider.PropTypes = {
  children: PropTypes.number.isRequired,
};
 */
