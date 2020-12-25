import { useState, useEffect } from "react";
import api from "../../Services/api";
import "./listOfGoods.css";
import ProductCard from "../ProductCard/ProductCard";
import Loader from "../Loader/Loader";

const ListOgGoods = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let timer;
    const getAllGoods = async () => {
      try {
        setIsLoading(true);
        const goods = await api.getAll();
        console.log("goods", goods.data.items);
        setProducts(goods.data.items);
        timer = setTimeout(() => setIsLoading(false), 500);
      } catch (error) {
        console.log("--error--", error);
      }

      return () => clearTimeout(timer);
    };
    getAllGoods();
  }, []);

  return (
    <>
      <div className="main">List of goods</div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="list-of-goods">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default ListOgGoods;
