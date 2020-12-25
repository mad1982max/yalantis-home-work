import { useState, useEffect } from "react";
import api from "../../Services/api";
import "./listOfGoods.css";
import ProductCard from "../ProductCard/ProductCard";

const ListOgGoods = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllGoods = async () => {
      try {
        const goods = await api.getAll();
        console.log("goods", goods.data.items);
        setProducts(goods.data.items);
      } catch (error) {
        console.log("error", error);
      }
    };
    getAllGoods();
  }, []);

  return (
    <>
      <header className="main">ListOfGoods</header>
      <div className="list-of-goods">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ListOgGoods;
