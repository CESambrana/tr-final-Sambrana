import { useState } from "react";

const ItemCount = ({ stock, addProd }) => {
  const [count, setCount] = useState(1);

  const resta = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const suma = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="countConteiner">
      <div className="count">
        <button className="resta" onClick={resta}>
          -
        </button>
        <p>{count}</p>
        <button className="suma" onClick={suma}>
          +
        </button>
      </div>
      <div>
        <button className="agregarCarro" onClick={() => addProd(count)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
