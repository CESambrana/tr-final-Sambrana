import { IoCartSharp } from "react-icons/io5";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cantidadTotal } = useContext(CartContext);
  return (
    <Link to={"/cart"} className="iconCart">
      <IoCartSharp />
      <p> {cantidadTotal()} </p>
    </Link>
  );
};

export default Cart;
