import { useState, useEffect } from "react";
import api from "../../Services/api";
import "./listOfGoods.css";
import ProductCard from "../ProductCard/ProductCard";
import Loader from "../Loader/Loader";

const ListOfGoods = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timer;
    const getAllGoods = async () => {
      try {
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
      <div className="main-header-inList">List of goods:</div>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={{ opacity: 1 }} className="list-of-goods">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default ListOfGoods;
