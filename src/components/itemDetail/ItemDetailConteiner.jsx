import { useState, useEffect } from "react";
import { getProducts } from "../../data/data";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailConteiner() {
  const [product, setProduct] = useState({});
  const { idProduct } = useParams();

  useEffect(() => {
    getProducts().then((data) => {
      const oneProduct = data.find((product) => product.id === idProduct);
      setProduct(oneProduct);
    });
  }, [idProduct]);

  return <ItemDetail product={product} />;
}

export default ItemDetailConteiner;
