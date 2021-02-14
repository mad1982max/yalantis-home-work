import { useDispatch, useSelector } from "react-redux";
import { pageMessage } from "Bus/Selectors/pageSelector";
import { fetchCreateProductAction } from "Saga/sagaActions";

const useCreateProduct = () => {
  const message = useSelector(pageMessage);
  const dispatch = useDispatch();
  const createNew = (product) => {
    const { name, origin, price } = product;
    const productJSON = JSON.stringify({
      product: { name, origin, price: +price },
    });
    dispatch(fetchCreateProductAction(productJSON));
  };
  return { createNew, message };
};
export { useCreateProduct };
