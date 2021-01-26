import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { setSingleProduct } from "Bus/Slicers/productSlicer";
import { singleProduct } from "Bus/Selectors/productSelector";
import { productIsLoaded } from "Bus/Selectors/pageSelector";
import { setProductIsLoaded } from "Bus/Slicers/menuSlicer";
import { url } from "Constants/config";

const useFetchedSingleData = (id) => {
  const currentProduct = useSelector(singleProduct);
  const areLoaded = useSelector(productIsLoaded);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${url}/${id}`)
      .then((result) => {
        const product = result.data;
        dispatch(setSingleProduct({ product }));
        dispatch(setProductIsLoaded(true));
      })
      .catch((error) => {
        dispatch(setProductIsLoaded(true));
        const msg = `${error.name}: ${error.message}`;
        history.push({ pathname: "/error", state: msg });
      });
  }, [id, history, dispatch]);

  return { currentProduct, areLoaded };
};
export { useFetchedSingleData };
