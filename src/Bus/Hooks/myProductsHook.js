import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myProducts, allProductsLoading } from "Bus/Selectors/productsSelector";
import { getAllMyProducts } from "Bus/Slicers/productsSlicer";
import { stringBuilder } from "Bus/Helpers/requestStringBuilder";
import { DEFAULT_REQUEST } from "Constants/constants";

const useMyFetchedData = () => {
  const allMyProductsAPI = useSelector(myProducts);
  const areLoaded = useSelector(allProductsLoading) === "pending";
  const dispatch = useDispatch();

  const sendRequest = (newOptions = DEFAULT_REQUEST) => {
    const options = { ...DEFAULT_REQUEST, ...newOptions };
    const query = stringBuilder(options);

    dispatch(getAllMyProducts(query));
  };

  useEffect(() => {
    if (allMyProductsAPI.length === 0) {
      sendRequest();
    }
  }, [allMyProductsAPI.length]);

  return { sendRequest, allMyProductsAPI, areLoaded };
};
export { useMyFetchedData };
