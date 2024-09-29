import React, { useState } from "react";

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
    <div>
      <button onClick={disminuir}>-</button>
      <span>{count}</span>
      <button onClick={incrementar}>+</button>
      <button className="" onClick={() => onAdd(count)}>
        {text}
      </button>
    </div>
  );
};

export default Contador;
