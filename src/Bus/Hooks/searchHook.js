import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { stringBuilder } from "Bus/Helpers/requestStringBuilder";
import {
  fetchMyProductsAction,
  fetchAllProductsAction,
} from "Bus/Saga/sagaActions";

import { loadStateFromLS } from "Bus/Helpers/localeStorageLoading";
import { DEFAULT_REQUEST, CURR_WORK_GOODS_ARR } from "Constants/constants";

const useSearch = () => {
  const dispatch = useDispatch();

  const sendRequest = useCallback(
    (source, newOptions) => {
      const filtersFromLS = loadStateFromLS() || {};

      const options = {
        ...DEFAULT_REQUEST,
        ...filtersFromLS,
        ...newOptions,
      };
      const query = stringBuilder(options);

      if (source === CURR_WORK_GOODS_ARR.ALL) {
        dispatch(fetchAllProductsAction(query));
      } else if (source === CURR_WORK_GOODS_ARR.MY) {
        dispatch(fetchMyProductsAction(query));
      } else {
        console.log("unknown source:", source);
      }
    },
    [dispatch]
  );
  return { sendRequest };
};
export { useSearch };
