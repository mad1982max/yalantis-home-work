import { useEffect } from "react";
import { historyLib } from "Bus/Libs/history";
import { useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";
import {
  allProducts,
  allProductsLoading,
  myProducts,
} from "Bus/Selectors/productsSelector";
import { useSearch } from "Bus/Hooks/searchHook";
import { CURR_WORK_GOODS_ARR } from "Constants/constants";

const useFetchedData = (source) => {
  const { sendRequest } = useSearch();
  const allProductsAPI = useSelector(allProducts);
  const allMyProductsAPI = useSelector(myProducts);
  const areLoaded = useSelector(allProductsLoading) === "pending";

  const currentGoodsArr =
    source === CURR_WORK_GOODS_ARR.MY ? allMyProductsAPI : allProductsAPI;

  useEffect(() => {
    const stateInLS = JSON.parse(localStorage.getItem("persist:root"));
    const currentRoot = historyLib.location.pathname;

    // if (
    //   (currentRoot === "/" && stateInLS.allProducts.products.length !== 0) ||
    //   (currentRoot === "/myGoods" &&
    //     stateInLS.allProducts.myProducts.length !== 0)
    // )
    //   return;

    sendRequest(source);
  }, [sendRequest, source]);

  return { currentGoodsArr, areLoaded };
};
export { useFetchedData };
