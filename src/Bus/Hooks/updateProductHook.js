import { useDispatch, useSelector } from "react-redux";
import { setPageMessage, setIsConfirmed } from "Bus/Slicers/pageSlicer";
import { pageMessage, isConfirmed } from "Bus/Selectors/pageSelector";
import { fetchUpdateProductAction } from "Saga/sagaActions";
import {
  MSG_TIMER,
  TYPE_MSG,
  ANSWER_MSG,
  ALERT_MSG,
} from "Constants/constants";

const useUpdateProduct = () => {
  const messageUpdated = useSelector(pageMessage);
  const answerIsConfirmed = useSelector(isConfirmed);
  const dispatch = useDispatch();

  const setConfirm = (value) => dispatch(setIsConfirmed(value));

  const update = (id, product) => {
    const serverMessage = {};
    const { name, origin, price } = product;
    const productJSON = JSON.stringify({
      product: { name, origin, price: +price },
    });
    try {
      const updateObj = { id, product: productJSON };
      dispatch(fetchUpdateProductAction(updateObj));
      serverMessage.title = ANSWER_MSG.TITLE;
      serverMessage.msg = ANSWER_MSG.MSG_UPD;
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
