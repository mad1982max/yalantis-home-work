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
    sendRequest("all");
  }, [sendRequest]);

  return { allProductsAPI, areLoaded };
};
export { useFetchedData };
