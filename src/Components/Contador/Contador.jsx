import React, { useState } from "react";
import "./style.css";

const Contador = ({ onAdd, text = "Agregar al carrito", c = 1 }) => {
  const [count, setCount] = useState(c);

  const incrementar = () => {
    setCount(count + 1);
  };

  const disminuir = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="contador-container">
      <button className="contador-button" onClick={disminuir}>
        -
      </button>
      <span className="contador-display">{count}</span>
      <button className="contador-button" onClick={incrementar}>
        +
      </button>
      <button className="add-to-cart-button" onClick={() => onAdd(count)}>
        {text}
      </button>
    </div>
  );
};

export default Contador;
