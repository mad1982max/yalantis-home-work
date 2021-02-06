import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrigins } from "Bus/Slicers/originsSlicer";
import { originArr, origingsAreLoaded } from "Bus/Selectors/originsSelector";

const useFetchedOrigins = () => {
  const origins = useSelector(originArr);
  const areLoaded = useSelector(origingsAreLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    if (origins.length === 0) {
      dispatch(getOrigins());
    }
  }, [dispatch, origins.length]);

  return { origins, areLoaded };
};
export { useFetchedOrigins };
