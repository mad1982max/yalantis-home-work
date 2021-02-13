import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { stringBuilder } from "Bus/Helpers/requestStringBuilder";
import { sagaActions } from "sagaActions";
import { DEFAULT_REQUEST, CURR_WORK_GOODS_ARR } from "Constants/constants";

const useSearch = () => {
  const dispatch = useDispatch();

  const sendRequest = useCallback(
    (source, newOptions = DEFAULT_REQUEST) => {
      const options = { ...DEFAULT_REQUEST, ...newOptions };
      const query = stringBuilder(options);

      if (source === CURR_WORK_GOODS_ARR.ALL) {
        const l = { type: sagaActions.FETCH_ALL_PRODUCTS_SAGA, payload: query };
        dispatch(l);
      } else if (source === CURR_WORK_GOODS_ARR.MY) {
        const l = { type: sagaActions.FETCH_MY_PRODUCTS_SAGA, payload: query };
        dispatch(l);
      } else {
        console.log("unknown source:", source);
      }
    },
    [dispatch]
  );
  return { sendRequest };
};
export { useSearch };
