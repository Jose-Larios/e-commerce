import React, { useContext, useState } from "react";
import CartContex from "../../Contex/CartContex";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Form from "../Form/Form";
import "./style.css";

const Cart = () => {
  const [orderId, setOrderId] = useState("");
  const { cart, removeItem, clear } = useContext(CartContex);

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
      addOrder();
    } else {
      setError(localError);
    }
  };

  const addOrder = () => {
    const purchase = {
      buyer,
      items: cart,
      date: new Date(),
    };
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, purchase)
      .then((res) => {
        setOrderId(res.id);
        clear();
        setBuyer({
          name: "",
          email: "",
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Carrito</h1>
      <div className="">
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          cart.map((el) => (
            <div className="product-item" key={el.id}>
              <div className="product-info">
                <p className="product-title">Producto: {el.titulo}</p>
                <p className="product-quantity">Cantidad: {el.cantidad}</p>
              </div>
              <img src={el.img} alt={el.titulo} className="product-image" />
              <button onClick={() => removeItem(el.id)} className="">
                Eliminar
              </button>
            </div>
          ))
        )}
      </div>
      <div className="form-container">
        <Form
          handleChange={handleChange}
          submit={submit}
          formData={buyer}
          error={error}
        />
      </div>
      {orderId && (
        <p className="confirmation-message">
          Gracias por su compra. Orden de compra: {orderId}
        </p>
      )}
    </div>
  );
};

export default Cart;
