import Category from "./category";
import "./itemList.css";
import ItemListProducts from "./ItemListProducts";

const ItemList = () => {
  return (
    <div>
      <div className="categorias">
        <Category />
      </div>

      <ItemListProducts />
    </div>
  );
};

export default ItemList;
