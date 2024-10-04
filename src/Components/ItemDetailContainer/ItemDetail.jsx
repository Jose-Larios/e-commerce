import React from "react";
import Contador from "../Contador/Contador";

const ItemDetail = ({ item, onAdd }) => {
  return (
    <div className="detail-card">
      <img src={item.img} alt={item.titulo} />
      <div>
        <h3>{item.titulo}</h3>
        <p>Descripcion: {item.descripcion}</p>
        <p className="price">Precio: {item.precio}</p>
        <div className="contador-container">
          <Contador onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
