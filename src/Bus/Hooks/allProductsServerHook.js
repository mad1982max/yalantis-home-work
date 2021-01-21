import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "Bus/Selectors//allProducts";
import { setAllProduct } from "Bus/Slicers/allProductsSlicer";
import axios from "axios";
import { url, productsPerPage } from "Constants/config";

const useFetchedData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const allProductsAPI = useSelector(allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${url}?perPage=${productsPerPage}`)
      .then((result) => {
        const goods = result.data.items;
        dispatch(setAllProduct({ goods }));
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        const msg = `${error.name}: ${error.message}`;
        history.push({ pathname: "/error", state: msg });
      });
  }, [dispatch, history]);
  return { allProductsAPI, isLoading };
};
export { useFetchedData };
