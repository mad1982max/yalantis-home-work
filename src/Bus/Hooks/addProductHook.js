import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "Bus/API/product";
import { setPageMessage } from "Bus/Slicers/pageSlicer";
import { pageMessage } from "Bus/Selectors/pageSelector";
import { MSG_TIMER } from "Constants/constants";

const useCreateProduct = () => {
  const message = useSelector(pageMessage);
  const dispatch = useDispatch();
  const createNew = async (product) => {
    const serverMessage = {};
    try {
      await createProduct(product);
      serverMessage.title = "Done!";
      serverMessage.msg = "Your product is on server";
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
  return { createNew, message };
};
export { useCreateProduct };
