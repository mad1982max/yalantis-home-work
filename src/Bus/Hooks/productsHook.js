import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allFilters } from "Bus/Selectors/filtersSelector";
import {
  allProducts,
  allProductsLoading,
  pageParams,
} from "Bus/Selectors/productsSelector";
import { getAllProducts } from "Bus/Slicers/productsSlicer";
import { setFilter } from "Bus/Slicers/filtersSlicer";
import { stringBuilder } from "Bus/Helpers/requestStringBuilder";
import { DEFAULT_REQUEST } from "Constants/constants";

const useFetchedData = () => {
  const filterObj = useSelector(allFilters);
  const allProductsAPI = useSelector(allProducts);
  const areLoaded = useSelector(allProductsLoading) === "pending";
  const pageParams_ = useSelector(pageParams);
  const dispatch = useDispatch();

  const sendRequest = (newOptions = {}) => {
    const options = { ...DEFAULT_REQUEST, ...newOptions };
    const query = stringBuilder(options);
    console.log(query);
    dispatch(getAllProducts(query));

    const newFilterObj = {
      ...DEFAULT_REQUEST,
      ...filterObj,
      ...pageParams_,
    };

    console.log(newFilterObj);

    dispatch(setFilter(newFilterObj));
  };

  useEffect(() => {
    if (allProductsAPI.length === 0) {
      sendRequest(DEFAULT_REQUEST);
    }
  }, [allProductsAPI.length]);

  return { sendRequest, allProductsAPI, areLoaded };
};
export { useFetchedData };
