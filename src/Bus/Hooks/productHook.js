import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { historyLib } from "Libs/history";
import axios from "axios";
import { setSingleProduct } from "Bus/Slicers/productSlicer";
import { singleProduct } from "Bus/Selectors/productSelector";
import { productIsLoaded } from "Bus/Selectors/pageSelector";
import { setProductIsLoaded } from "Bus/Slicers/menuSlicer";
import { URL } from "Constants/constants";

const useFetchedSingleData = (id) => {
  const currentProduct = useSelector(singleProduct);
  const areLoaded = useSelector(productIsLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${URL}/${id}`)
      .then((result) => {
        const product = result.data;
        dispatch(setSingleProduct({ product }));
        dispatch(setProductIsLoaded(true));
      })
      .catch((error) => {
        dispatch(setProductIsLoaded(true));
        const msg = `${error.name}: ${error.message}`;
        historyLib.push({ pathname: "/error", state: msg });
      });
  }, [id, dispatch]);

  return { currentProduct, areLoaded };
};
export { useFetchedSingleData };
