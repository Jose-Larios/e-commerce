import React from "react";
import Contador from "../Contador/Contador";

const ItemDetail = ({ item, onAdd }) => {
  return (
    <>
      <img src={item.img} alt={item.titulo} />
      <div>
        <h3>{item.titulo}</h3>
        <p>Descripcion: {item.descripcion}</p>
        <p>Precio: {item.precio}</p>
        <Contador onAdd={onAdd} />
      </div>
    </>
  );
};

export default ItemDetail;
