import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allProducts,
  allProductsLoading,
} from "Bus/Selectors/productsSelector";
import { getAllProducts } from "Bus/Slicers/productsSlicer";
import { stringBuilder } from "Bus/Helpers/requestStringBuilder";
import { DEFAULT_REQUEST } from "Constants/constants";

const useFetchedData = () => {
  const allProductsAPI = useSelector(allProducts);
  const areLoaded = useSelector(allProductsLoading) === "pending";
  const dispatch = useDispatch();

  const sendRequest = (newOptions = DEFAULT_REQUEST) => {
    const options = { ...DEFAULT_REQUEST, ...newOptions };
    const query = stringBuilder(options);
    dispatch(getAllProducts(query));
  };

  useEffect(() => {
    if (allProductsAPI.length === 0) {
      sendRequest();
    }
  }, [allProductsAPI.length]);

  return { sendRequest, allProductsAPI, areLoaded };
};
export { useFetchedData };
