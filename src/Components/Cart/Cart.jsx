import React, { useContext, useState } from "react";
import CartContex from "../../Contex/CartContex";

const Cart = () => {
  const { cart } = useContext(CartContex);

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
  });
  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    const localError = {};
    if (!buyer.name) {
      localError.name = "El nombre es obligatorio";
    }
    if (!buyer.email) {
      localError.email = "El email es obligatorio";
    }

    if (Object.keys(localError).length === 0) {
      console.log("Creamos la orden");
    } else {
      setError(localError);
    }
  };
  return <div></div>;
};

export default Cart;
