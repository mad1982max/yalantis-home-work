import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "Bus/API/product";
import { setPageMessage, setIsConfirmed } from "Bus/Slicers/pageSlicer";
import { pageMessage, isConfirmed } from "Bus/Selectors/pageSelector";
import {
  MSG_TIMER,
  TYPE_MSG,
  UPDATE_MSG,
  ALERT_MSG,
} from "Constants/constants";

const useUpdateProduct = () => {
  const messageUpdated = useSelector(pageMessage);
  const answerIsConfirmed = useSelector(isConfirmed);
  const dispatch = useDispatch();

  const setConfirm = (value) => dispatch(setIsConfirmed(value));

  const update = async (id, product) => {
    const serverMessage = {};
    const productJSON = JSON.stringify({
      product,
    });
    try {
      await updateProduct(id, productJSON);
      serverMessage.title = UPDATE_MSG.TITLE;
      serverMessage.msg = UPDATE_MSG.MSG;
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
  return { update, messageUpdated, answerIsConfirmed, setConfirm };
};
export { useUpdateProduct };
