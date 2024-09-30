import React, { useContext, useState } from "react";
import CartContex from "../../Contex/CartContex";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Form from "../Form/Form";

const Cart = () => {
  const [orderId, setorderID] = useState("");
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
        setorderID(res.id);
        clear();
        setBuyer({
          name: "",
          email: "",
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      Carrito
      <div className="">
        {cart.map((el) => {
          <div className="" key={el.id}>
            <div>
              <p>Producto: {el.titulo}</p>
              <p>Cantidad: {el.cantidad}</p>
            </div>
            <img src={el.img} alt={el.titulo} />
            <button onClick={() => removeItem(el.id)} className="">
              Eliminar
            </button>
          </div>;
        })}
      </div>
      <Form
        handleChange={handleChange}
        submit={submit}
        formData={buyer}
        error={error}
      />
      {orderId && <p>Gracias por su compra orden de compra {orderId}</p>}
    </div>
  );
};

export default Cart;
