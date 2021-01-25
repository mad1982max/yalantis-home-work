import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { allFilters } from "Bus/Selectors/filtersSelector";
import { allProducts } from "Bus/Selectors/productsSelector";
import { setAllProduct } from "Bus/Slicers/productsSlicer";
import { setFilter } from "Bus/Slicers/filtersSlicer";
import { stringBuilder } from "Bus/Helpers/requestStringBuilder";
import { url, defaultRequest } from "Constants/config";

const useFetchedData = () => {
  const filterObj = useSelector(allFilters);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const allProductsAPI = useSelector(allProducts);
  const dispatch = useDispatch();

  const sendRequest = (newOptions) => {
    const options = { ...defaultRequest, ...newOptions };
    const str = stringBuilder(options);
    axios
      .get(`${url}?${str}`)
      .then((result) => {
        const { items, page, perPage, totalItems } = result.data;
        dispatch(setAllProduct({ goods: items }));

        const newFilterObj = {
          ...defaultRequest,
          ...filterObj,
          currentPage: page,
          perPage,
          totalItems,
        };
        dispatch(setFilter(newFilterObj));
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        const msg = `${error.name}: ${error.message}`;
        history.push({ pathname: "/error", state: msg });
      });
  };

  useEffect(() => {
    sendRequest(defaultRequest);
  }, []);

  return { sendRequest, allProductsAPI, isLoading };
};
export { useFetchedData };
