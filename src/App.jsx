import "./App.css";
import NavBar from "./components/navBar/NavBar";
import ItemList from "./components/itemList/ItemList";
import Footer from "./components/footer/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import ItemDetailConteiner from "./components/itemDetail/ItemDetailConteiner";
import Carrito from "./components/cart/carrito";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />

          <Routes>
            <Route path="/" element={<ItemList />} />
            <Route path="/category/:idCategory" element={<ItemList />} />
            <Route
              path="/detail/:idProduct"
              element={<ItemDetailConteiner />}
            />
            <Route path="/cart" element={<Carrito />} />
          </Routes>

          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
