import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setSingleProduct } from "Bus/Slicers/productSlicer";
import { singleProduct } from "Bus/Selectors/productSelector";
import axios from "axios";
import { url } from "Constants/config";

const useFetchedSingleData = (id) => {
  const [isLoading, setIsLoading] = useState(true);
  const currentProduct = useSelector(singleProduct);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${url}/${id}`)
      .then((result) => {
        const product = result.data;
        dispatch(setSingleProduct({ product }));
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        const msg = `${error.name}: ${error.message}`;
        history.push({ pathname: "/error", state: msg });
      });
  }, [id, history, dispatch]);

  return { currentProduct, isLoading };
};
export { useFetchedSingleData };
