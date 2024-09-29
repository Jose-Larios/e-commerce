import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((el, i) => (
        <Item key={i} item={el} />
      ))}
    </div>
  );
};

export default ItemList;
