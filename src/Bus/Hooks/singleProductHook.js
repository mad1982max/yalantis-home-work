import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProductAction } from "Bus/Saga/sagaActions";
import { singleProduct, loading } from "Bus/Selectors/productSelector";

const useFetchedSingleData = (id) => {
  const currentProduct = useSelector(singleProduct);
  const areLoaded = useSelector(loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProductAction(id));
  }, [id, dispatch]);

  return { currentProduct, areLoaded };
};
export { useFetchedSingleData };
