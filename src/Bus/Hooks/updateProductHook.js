import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "Bus/API/product";
import { setPageMessage } from "Bus/Slicers/pageSlicer";
import { pageMessage } from "Bus/Selectors/pageSelector";
import { MSG_TIMER } from "Constants/constants";

const useUpdateProduct = () => {
  const messageUpdated = useSelector(pageMessage);
  const dispatch = useDispatch();
  const update = async (id, product) => {
    const serverMessage = {};
    try {
      await updateProduct(id, product);
      serverMessage.title = "Done!";
      serverMessage.msg = "Product is updated!";
      serverMessage.type = "info";
    } catch (e) {
      const errorMsg = e.response.data.error.message || e.message;
      serverMessage.title = "Error!";
      serverMessage.msg = errorMsg;
      serverMessage.type = "alert";
    }
    dispatch(setPageMessage(serverMessage));
    setTimeout(() => dispatch(setPageMessage({})), MSG_TIMER);
  };
  return { update, messageUpdated };
};
export { useUpdateProduct };
