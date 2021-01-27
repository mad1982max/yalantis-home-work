import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { allFilters } from "Bus/Selectors/filtersSelector";
import { productsAreLoaded } from "Bus/Selectors/pageSelector";
import { allProducts } from "Bus/Selectors/productsSelector";
import { setAllProduct } from "Bus/Slicers/productsSlicer";
import { setFilter } from "Bus/Slicers/filtersSlicer";
import { setProductsAreLoaded } from "Bus/Slicers/menuSlicer";
import { stringBuilder } from "Bus/Helpers/requestStringBuilder";
import { URL, DEFAULT_REQUEST } from "Constants/constants";

const useFetchedData = () => {
  const filterObj = useSelector(allFilters);
  const history = useHistory();
  const allProductsAPI = useSelector(allProducts);
  const areLoaded = useSelector(productsAreLoaded);
  const dispatch = useDispatch();

  const sendRequest = (newOptions) => {
    const options = { ...DEFAULT_REQUEST, ...newOptions };
    const str = stringBuilder(options);
    axios
      .get(`${URL}?${str}`)
      .then((result) => {
        const { items, page, perPage, totalItems } = result.data;
        dispatch(setAllProduct({ goods: items }));

        const newFilterObj = {
          ...DEFAULT_REQUEST,
          ...filterObj,
          currentPage: page,
          perPage,
          totalItems,
        };
        dispatch(setFilter(newFilterObj));
        dispatch(setProductsAreLoaded(true));
      })
      .catch((error) => {
        dispatch(setProductsAreLoaded(true));
        const msg = `${error.name}: ${error.message}`;
        history.push({ pathname: "/error", state: msg });
      });
  };

  useEffect(() => {
    sendRequest(DEFAULT_REQUEST);
  }, []);

  return { sendRequest, allProductsAPI, areLoaded };
};
export { useFetchedData };
