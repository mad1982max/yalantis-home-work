import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "Bus/Slicers/productSlicer";
import {
  singleProduct,
  singleProductLoading,
} from "Bus/Selectors/productSelector";

const useFetchedSingleData = (id) => {
  const currentProduct = useSelector(singleProduct);
  const areLoaded = useSelector(singleProductLoading) === "pending";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(id));
  }, [id, dispatch]);

  return { currentProduct, areLoaded };
};
export { useFetchedSingleData };
