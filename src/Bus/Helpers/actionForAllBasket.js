import { useDispatch } from "react-redux";
import { deleteBasket } from "Bus/Slicers/basketSlicer";
import { question } from "Constants/config";

const useActionForAllBasket = () => {
  const dispatch = useDispatch();
  const buyAll = () => {
    console.log("--Buying are Not implemented yet--");
  };

  const deleteAll = () => {
    const isConfirmed = window.confirm(question);
    if (isConfirmed) dispatch(deleteBasket());
  };
  return { buyAll, deleteAll };
};

export { useActionForAllBasket };
