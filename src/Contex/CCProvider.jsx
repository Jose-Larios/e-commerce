import { useState } from "react";
import CartContex from "./CartContex";

const CCProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, c) => {
    setCart([
      ...cart,
      {
        cantidad: c,
        ...item,
      },
    ]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((el) => el.id !== id));
  };

  const clear = () => {
    setCart([]);
  };

  const values = {
    cart,
    addItem,
    removeItem,
    clear,
  };

  return <CartContex.Provider value={values}>{children}</CartContex.Provider>;
};

export default CCProvider;
