import ItemCount from "../itemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./itemDetail.css";

const ItemDetail = ({ product }) => {
  const { addProductCart } = useContext(CartContext);
  const addProd = (count) => {
    const productCart = { ...product, cantidad: count };
    addProductCart(productCart);
  };

  return (
    <div className="detail">
      <div className="itemDetail">
        <img src={product.image} alt={product.name} />
        <div>
          <h2>{product.name}</h2>
          <p className="descripcion">{product.descripcion}</p>
          <p className="precioDetail">${product.price}</p>

          <ItemCount stock={product.stock} addProd={addProd} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
