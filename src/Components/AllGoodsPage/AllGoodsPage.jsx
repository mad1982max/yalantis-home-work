import { useState, useEffect, useContext } from "react";
import api from "../../Services/api";
import "./allGoodsPage.css";
import { fetchedDataCTX } from "../../Context/localContext";
import ProductCard from "../ProductCard/ProductCard";
import Loader from "../Loader/Loader";

const AllGoodsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { allGoods, setAllGoods } = useContext(fetchedDataCTX);

  useEffect(() => {
    let timer;
    const getAllGoods = async () => {
      if (allGoods.length > 0) {
        setIsLoading(false);
      } else {
        try {
          const goods = await api.getAll();
          console.log("goods", goods.data.items);
          setAllGoods(goods.data.items);
          timer = setTimeout(() => setIsLoading(false), 500);
        } catch (error) {
          console.log("--error--", error);
        }
      }
      return () => clearTimeout(timer);
    };
    getAllGoods();
  }, [setAllGoods, allGoods.length]);

  return (
    <>
      <div className="main-header-inList">List of goods:</div>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={{ opacity: 1 }} className="list-of-goods">
          {allGoods.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default AllGoodsPage;
