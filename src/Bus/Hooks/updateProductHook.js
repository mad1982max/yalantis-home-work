import { useDispatch, useSelector } from "react-redux";
import { setIsConfirmed } from "Bus/Slicers/pageSlicer";
import { pageMessage, isConfirmed } from "Bus/Selectors/pageSelector";
import { fetchUpdateProductAction } from "Saga/sagaActions";

const useUpdateProduct = () => {
  const messageUpdated = useSelector(pageMessage);
  const answerIsConfirmed = useSelector(isConfirmed);
  const dispatch = useDispatch();

  const setConfirm = (value) => dispatch(setIsConfirmed(value));

  const update = (id, product) => {
    const { name, origin, price } = product;
    const productJSON = JSON.stringify({
      product: { name, origin, price: +price },
    });
    const updateObj = { id, product: productJSON };
    dispatch(fetchUpdateProductAction(updateObj));
  };
  return { update, messageUpdated, answerIsConfirmed, setConfirm };
};
export { useUpdateProduct };
