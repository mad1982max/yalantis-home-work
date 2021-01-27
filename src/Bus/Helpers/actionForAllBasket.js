import { useDispatch } from "react-redux";
import { deleteBasket } from "Bus/Slicers/basketSlicer";
import { QUESTION } from "Constants/constants";

const useActionForAllBasket = () => {
  const dispatch = useDispatch();
  const buyAll = () => {
    console.log("--Buying are Not implemented yet--");
  };

  const deleteAll = () => {
    const isConfirmed = window.confirm(QUESTION);
    if (isConfirmed) dispatch(deleteBasket());
  };
  return { buyAll, deleteAll };
};

export { useActionForAllBasket };
