import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  allProducts,
  loading,
  myProducts,
} from "Bus/Selectors/productsSelector";
import { useSearch } from "Bus/Hooks/searchHook";
import { CURR_WORK_GOODS_ARR } from "Constants/constants";

const useFetchedData = (source) => {
  const { sendRequest } = useSearch();
  const allProductsAPI = useSelector(allProducts);
  const allMyProductsAPI = useSelector(myProducts);
  const areLoaded = useSelector(loading);

  const currentGoodsArr =
    source === CURR_WORK_GOODS_ARR.MY ? allMyProductsAPI : allProductsAPI;

  useEffect(() => {
    sendRequest(source);
  }, [sendRequest, source]);

  return { currentGoodsArr, areLoaded };
};
export { useFetchedData };
