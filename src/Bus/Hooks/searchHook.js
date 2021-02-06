import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { getAllProducts, getAllMyProducts } from "Bus/Slicers/productsSlicer";
import { stringBuilder } from "Bus/Helpers/requestStringBuilder";
import { DEFAULT_REQUEST } from "Constants/constants";

const useSearch = () => {
  const dispatch = useDispatch();

  const sendRequest = useCallback(
    (source, newOptions = DEFAULT_REQUEST) => {
      const options = { ...DEFAULT_REQUEST, ...newOptions };
      const query = stringBuilder(options);
      if (source === "all") {
        dispatch(getAllProducts(query));
      } else if (source === "my") {
        dispatch(getAllMyProducts(query));
      }
    },
    [dispatch]
  );
  return { sendRequest };
};
export { useSearch };
