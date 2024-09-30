import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div key={item.id}>
      <img src={item.img} alt={item.titulo} />
      <p>Titulo: {item.titulo}</p>
      <p>Descripcion: {item.descripcion}</p>
      <p>Precio: {item.precio}</p>
      <Link className="" to={`/detail/${item.id}`}>
        Ver detalles
      </Link>
    </div>
  );
};

export default Item;
