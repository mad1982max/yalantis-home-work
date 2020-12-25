import { useState, useEffect } from "react";
import api from "../../Services/api";

const ListOgGoods = () => {
  const [products, setProducts] = useState("");

  useEffect(() => {
    const getAllGoods = async () => {
      try {
        const goods = await api.getAll();
        console.log("goods", goods);
        setProducts(goods);
      } catch (error) {
        console.log("error", error);
      }
    };
    getAllGoods();
  }, []);

  return (
    <>
      <header className="main">ListOfGoods</header>
    </>
  );
};

export default ListOgGoods;
