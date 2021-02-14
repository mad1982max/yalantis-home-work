import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetOriginsAction } from "Saga/sagaActions";
import { originArr, origingsAreLoaded } from "Bus/Selectors/originsSelector";

const useFetchedOrigins = () => {
  const origins = useSelector(originArr);
  const areLoaded = useSelector(origingsAreLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    if (origins.length === 0) {
      dispatch(fetchGetOriginsAction());
    }
  }, [dispatch, origins.length]);

  return { origins, areLoaded };
};
export { useFetchedOrigins };
