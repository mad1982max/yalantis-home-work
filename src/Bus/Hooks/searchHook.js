import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { getAllProducts, getAllMyProducts } from "Bus/Slicers/productsSlicer";
import { stringBuilder } from "Bus/Helpers/requestStringBuilder";
import { DEFAULT_REQUEST, CURR_WORK_GOODS_ARR } from "Constants/constants";

const useSearch = () => {
  const dispatch = useDispatch();

  const sendRequest = useCallback(
    (source, newOptions = DEFAULT_REQUEST) => {
      const options = { ...DEFAULT_REQUEST, ...newOptions };
      const query = stringBuilder(options);

      if (source === CURR_WORK_GOODS_ARR.ALL) {
        dispatch(getAllProducts(query));
      } else if (source === CURR_WORK_GOODS_ARR.MY) {
        dispatch(getAllMyProducts(query));
      } else {
        console.log("unknown source:", source);
      }
    },
    [dispatch]
  );
  return { sendRequest };
};
export { useSearch };
