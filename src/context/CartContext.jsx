import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProductCart = (newProduct) => {
    setCart([...cart, newProduct]);
  };
  console.log(cart);

  const cantidadTotal = () => {
    const total = cart.reduce(
      (acumulador, productCart) => acumulador + productCart.cantidad,
      0
    );
    return total;
  };

  const precioTotalCart = () => {
    const total = cart.reduce(
      (acumulador, productCart) =>
        acumulador + productCart.cantidad * productCart.price,
      0
    );
    return total;
  };

  const deleteProduct = (idProduct) => {
    const filterCart = cart.filter(
      (productCart) => productCart.id !== idProduct
    );
    setCart(filterCart);
  };

  const vaciarCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductCart,
        cantidadTotal,
        precioTotalCart,
        deleteProduct,
        vaciarCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
