import React from "react";
import Item from "./Item";
import "./style.css";

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((el, i) => (
        <Item key={i} item={el} />
      ))}
    </div>
  );
};

export default ItemList;
