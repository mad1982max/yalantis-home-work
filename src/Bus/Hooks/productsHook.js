import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  allProducts,
  allProductsLoading,
} from "Bus/Selectors/productsSelector";
import { useSearch } from "Bus/Hooks/searchHook";

const useFetchedData = () => {
  const { sendRequest } = useSearch();
  const allProductsAPI = useSelector(allProducts);
  const areLoaded = useSelector(allProductsLoading) === "pending";

  useEffect(() => {
    if (allProductsAPI.length === 0) {
      sendRequest();
    }
  }, [allProductsAPI.length, sendRequest]);

  return { sendRequest, allProductsAPI, areLoaded };
};
export { useFetchedData };
