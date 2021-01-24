import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setAllOrigins } from "Bus/Slicers/originsSlicer";
import { originArr } from "Bus/Selectors/originsSelector";
import { urlOrigins } from "Constants/config";

const useFetchedOrigins = () => {
  const [isLoading, setIsLoading] = useState(true);
  const origins = useSelector(originArr);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(urlOrigins)
      .then((result) => {
        const origins = result.data.items;
        dispatch(setAllOrigins({ origins }));
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        const msg = `${error.name}: ${error.message}`;
        history.push({ pathname: "/error", state: msg });
      });
  }, [history, dispatch]);

  return { origins, isLoading };
};
export { useFetchedOrigins };
