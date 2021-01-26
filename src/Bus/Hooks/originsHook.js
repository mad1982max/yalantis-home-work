import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setAllOrigins } from "Bus/Slicers/originsSlicer";
import { originArr } from "Bus/Selectors/originsSelector";
import { originsAreLoaded } from "Bus/Selectors/pageSelector";
import { setOriginsAreLoaded } from "Bus/Slicers/menuSlicer";
import { urlOrigins } from "Constants/config";

const useFetchedOrigins = () => {
  const origins = useSelector(originArr);
  const areLoaded = useSelector(originsAreLoaded);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(urlOrigins)
      .then((result) => {
        const origins = result.data.items;
        dispatch(setAllOrigins({ origins }));
        dispatch(setOriginsAreLoaded(true));
      })
      .catch((error) => {
        dispatch(setOriginsAreLoaded(true));
        const msg = `${error.name}: ${error.message}`;
        history.push({ pathname: "/error", state: msg });
      });
  }, [history, dispatch]);

  return { origins, areLoaded };
};
export { useFetchedOrigins };
