import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { url, productsPerPage } from "Helpers/config";

const useFetchedData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allGoods, setAllGoods] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${url}?perPage=${productsPerPage}`)
      .then((result) => {
        const goods = result.data.items;
        setAllGoods(goods);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        const msg = `${error.name}: ${error.message}`;
        history.push({ pathname: "/error", state: msg });
      });
  }, [setAllGoods, history]);
  return { allGoods, setAllGoods, isLoading };
};
export default useFetchedData;
