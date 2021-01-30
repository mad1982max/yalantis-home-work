import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { historyLib } from "Libs/history";
import { setAllOrigins } from "Bus/Slicers/originsSlicer";
import { originArr } from "Bus/Selectors/originsSelector";
import { originsAreLoaded } from "Bus/Selectors/pageSelector";
import { setOriginsAreLoaded } from "Bus/Slicers/menuSlicer";
import { URL_ORIGINS } from "Constants/constants";

const useFetchedOrigins = () => {
  const origins = useSelector(originArr);
  const areLoaded = useSelector(originsAreLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(URL_ORIGINS)
      .then((result) => {
        const origins = result.data.items;
        dispatch(setAllOrigins({ origins }));
        dispatch(setOriginsAreLoaded(true));
      })
      .catch((error) => {
        dispatch(setOriginsAreLoaded(true));
        const msg = `${error.name}: ${error.message}`;
        historyLib.push({ pathname: "/error", state: msg });
      });
  }, [dispatch]);

  return { origins, areLoaded };
};
export { useFetchedOrigins };
