import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { url } from "Helpers/config";

const useFetchedSingleData = (id) => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${url}/${id}`)
      .then((result) => {
        const product = result.data;
        setProduct(product);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        const msg = `${error.name}: ${error.message}`;
        history.push({ pathname: "/error", state: msg });
      });
  }, [id, setProduct, history]);

  return { product, setProduct, isLoading };
};
export default useFetchedSingleData;
