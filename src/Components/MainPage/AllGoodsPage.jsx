import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import api from "Helpers/api";
import { fetchedDataCTX } from "Context/localContext";
import ProductCard from "Components/ProductCard/ProductCard";
import Loader from "Components/Loader/Loader";
import "Components/MainPage/allGoodsPage.css";

const AllGoodsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { allGoods, setAllGoods } = useContext(fetchedDataCTX);
  const history = useHistory();

  useEffect(() => {
    let timer;
    const getAllGoods = async () => {
      if (allGoods.length > 0) {
        setIsLoading(false);
      } else {
        try {
          const goods = await api.getAll();
          console.log("goods:", goods.data.items);
          setAllGoods(goods.data.items);
          timer = setTimeout(() => setIsLoading(false), 500);
        } catch (error) {
          console.log("--error--", error.message);
          const msg = `${error.name}: ${error.message}`;
          history.push({ pathname: "/error", state: msg });
        }
      }
      return () => clearTimeout(timer);
    };
    getAllGoods();
  }, [setAllGoods, allGoods.length, history]);

  return (
    <>
      <div className="main-header-inList">List of goods:</div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="list-of-goods">
          {allGoods.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default AllGoodsPage;
