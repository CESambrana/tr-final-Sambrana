import "./carrito.css";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";

function Carrito() {
  const { cart, precioTotalCart, deleteProduct, vaciarCart } =
    useContext(CartContext);

  return (
    <div>
      <h2 className="tituloCart">Productos en carrito</h2>
      <div className="carrito">
        {cart.map((productCart) => (
          <div className="carritoConteiner">
            <img src={productCart.image} alt="" />
            <p>{productCart.name}</p>
            <p className="cartPrecio">
              Precio c/u <span>${productCart.price}</span>
            </p>
            <p>Cantidad: {productCart.cantidad}</p>
            <p className="precioParcial">
              ${productCart.cantidad * productCart.price}
            </p>
            <button
              className="botonEliminar"
              onClick={() => deleteProduct(productCart.id)}
            >
              <FaTrashAlt />
            </button>
          </div>
        ))}

        <p>Precio total: ${precioTotalCart()}</p>
        <button className="vaciarCarrito" onClick={() => vaciarCart()}>
          {" "}
          Vaciar Carrito
        </button>
        <button className="terminarCompra">Terminar mi compra</button>
      </div>
    </div>
  );
}

export default Carrito;
