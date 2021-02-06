import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  allProducts,
  allProductsLoading,
  myProducts,
} from "Bus/Selectors/productsSelector";
import { useSearch } from "Bus/Hooks/searchHook";

const useFetchedData = (source) => {
  const { sendRequest } = useSearch();
  const allProductsAPI = useSelector(allProducts);
  const allMyProductsAPI = useSelector(myProducts);
  const areLoaded = useSelector(allProductsLoading) === "pending";

  useEffect(() => {
    sendRequest(source);
  }, [sendRequest]);

  return { allProductsAPI, allMyProductsAPI, areLoaded };
};
export { useFetchedData };
