import { useEffect } from "react";
import { useSelector } from "react-redux";
import { myProducts, allProductsLoading } from "Bus/Selectors/productsSelector";
import { useSearch } from "Bus/Hooks/searchHook";

const useMyFetchedData = () => {
  const { sendRequest } = useSearch();
  const allMyProductsAPI = useSelector(myProducts);
  const areLoaded = useSelector(allProductsLoading) === "pending";

  useEffect(() => {
    sendRequest("my");
  }, []);

  return { sendRequest, allMyProductsAPI, areLoaded };
};
export { useMyFetchedData };
