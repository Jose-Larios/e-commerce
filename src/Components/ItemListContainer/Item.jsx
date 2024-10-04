import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Item = ({ item }) => {
  return (
    <div className="item-card" key={item.id}>
      <img src={item.img} alt={item.titulo} />
      <p>Titulo: {item.titulo}</p>
      <p>Descripcion: {item.descripcion}</p>
      <p className="price">Precio: {item.precio}</p>
      <Link className="" to={`/detail/${item.id}`}>
        Ver detalles
      </Link>
    </div>
  );
};

export default Item;
