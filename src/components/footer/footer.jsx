import { PiWebhooksLogoFill } from "react-icons/pi";
import "../navBar/navBar.css";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div>
        <p>Contactanos:</p>
        <p>-3454168701</p>
        <p>-Instagram</p>
        <p>-Facebook</p>
        <p>-Concordia, Entre Ríos</p>
      </div>

      <Link to={"/"} className="logo">
        <PiWebhooksLogoFill />
        <h2>Tecnotodo</h2>
      </Link>
    </div>
  );
}

export default Footer;
