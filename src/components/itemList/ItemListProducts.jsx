import { useState, useEffect } from "react";
import { getProducts } from "../../data/data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ItemListProducts = () => {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    getProducts()
      .then((data) => {
        if (idCategory) {
          const filterCategory = data.filter(
            (product) => product.category === idCategory
          );
          setProducts(filterCategory);
        } else {
          setProducts(data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Finalizó el coso");
      });
  }, [idCategory]);

  return (
    <div className="itemListConteiner">
      <div className="products">
        {products.map((product) => (
          <Link to={"/detail/" + product.id} className="cart">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>
              Precio: <span>${product.price}</span>{" "}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemListProducts;
