import { PiWebhooksLogoFill } from "react-icons/pi";
import Cart from "./IconCart";
import "./navBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="header">
      <Link to={"/"} className="logo">
        <PiWebhooksLogoFill />
      </Link>

      <Link to={"/"} className="titulo">
        Tecnotodo
      </Link>

      <Cart />
    </div>
  );
}

export default NavBar;
