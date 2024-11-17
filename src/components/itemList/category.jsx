import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

import { Link } from "react-router-dom";

const Category = () => {
  const [dropdown, setDropdown] = useState(false);

  const abrirCerrar = () => {
    setDropdown(!dropdown);
  };

  return (
    <div>
      <Dropdown isOpen={dropdown} toggle={abrirCerrar} direction="right">
        <DropdownToggle caret className="botonCategory">
          Categorias
        </DropdownToggle>

        <DropdownMenu className="menuCategory">
          <Link className="botonCategorys" to={"/category/monitores"}>
            <DropdownItem className="colorBordo">Monitores</DropdownItem>
          </Link>

          <Link className="botonCategorys" to={"/category/auriculares"}>
            <DropdownItem className="colorBordo"> Auriculares</DropdownItem>
          </Link>

          <Link className="botonCategorys" to={"/"}>
            <DropdownItem className="colorBordo"> Todos</DropdownItem>
          </Link>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Category;
