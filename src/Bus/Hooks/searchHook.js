import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { getAllProducts } from "Bus/Slicers/productsSlicer";
import { stringBuilder } from "Bus/Helpers/requestStringBuilder";
import { DEFAULT_REQUEST } from "Constants/constants";

const useSearch = () => {
  const dispatch = useDispatch();

  const sendRequest = useCallback(
    (newOptions = DEFAULT_REQUEST) => {
      const options = { ...DEFAULT_REQUEST, ...newOptions };
      const query = stringBuilder(options);
      dispatch(getAllProducts(query));
    },
    [dispatch]
  );
  return { sendRequest };
};
export { useSearch };
