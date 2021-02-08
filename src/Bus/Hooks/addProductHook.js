import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "Bus/API/product";
import { setPageMessage } from "Bus/Slicers/pageSlicer";
import { pageMessage } from "Bus/Selectors/pageSelector";
import {
  MSG_TIMER,
  TYPE_MSG,
  ANSWER_MSG,
  ALERT_MSG,
} from "Constants/constants";

const useCreateProduct = () => {
  const message = useSelector(pageMessage);
  const dispatch = useDispatch();
  const createNew = async (product) => {
    const serverMessage = {};
    const { name, origin, price } = product;
    const productJSON = JSON.stringify({
      product: { name, origin, price: +price },
    });
    try {
      await createProduct(productJSON);
      serverMessage.title = ANSWER_MSG.TITLE;
      serverMessage.msg = ANSWER_MSG.MSG_CREATE;
      serverMessage.type = TYPE_MSG.INFO;
    } catch (e) {
      const errorMsg = e.response.data.error.message || e.message;
      serverMessage.title = ALERT_MSG.TITLE;
      serverMessage.msg = errorMsg;
      serverMessage.type = TYPE_MSG.ALERT;
    }
    dispatch(setPageMessage(serverMessage));
    setTimeout(() => dispatch(setPageMessage({})), MSG_TIMER);
  };
  return { createNew, message };
};
export { useCreateProduct };
