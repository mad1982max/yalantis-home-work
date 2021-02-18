import { useSelector, useDispatch } from "react-redux";
import Pagination from "Components/Pagination/Pagination";
import Filters from "Components/Filters/Filters";
import { requestParams } from "Bus/Selectors/productsSelector";
import { nextPrevBtnAvaliable } from "Bus/Helpers/nextPrevPageAvaliability";
import { createOptionsForReactSelector } from "Bus/Helpers/reactSelectExtractData";
import { useSearch } from "Bus/Hooks/searchHook";
import { setFilter, clearFilter } from "Bus/Slicers/productsSlicer";
import { useFetchedOrigins } from "Bus/Hooks/originsHook";
import {
  loadStateToLS,
  loadStateFromLS,
} from "Bus/Helpers/localeStorageLoading";
import { PER_PAGE_VARS } from "Constants/constants";
import "Containers/Search/searchRow.css";

const SearchRow = ({ source }) => {
  const { origins } = useFetchedOrigins();
  const filterObj = useSelector(requestParams);
  const dispatch = useDispatch();
  const { sendRequest } = useSearch();

  const filtersFromLS = loadStateFromLS();
  const nextPrevObjectAvaliab = nextPrevBtnAvaliable(
    filterObj.page,
    filterObj.perPage,
    filterObj.totalItems
  );

  const searchFn_ = (e, type, param) => {
    switch (type) {
      case "nextpage":
        const page = filterObj.page + param;
        loadStateToLS({ page });
        sendRequest(source, { ...filterObj, page });
        break;
      case "perPage":
        loadStateToLS({ perPage: param, page: 1 });
        sendRequest(source, { ...filterObj, perPage: param, page: 1 });
        break;
      case "search":
        loadStateToLS({ page: 1 });
        sendRequest(source, { ...filterObj, page: 1 });
        break;
      default:
        console.log("unknown type: ", type);
    }
  };

  const clearFiltersBtn = () => {
    loadStateToLS();
    dispatch(clearFilter());
    sendRequest(source);
  };

  const setFilterFn = (obj) => {
    loadStateToLS(obj);
    dispatch(setFilter(obj));
  };

  const optionsForSelector = createOptionsForReactSelector(origins);
  const propsOriginsForSelector = filtersFromLS?.origins || filterObj.origins;
  const currentReactSelectorValue = createOptionsForReactSelector(
    propsOriginsForSelector
  );

  return (
    <div className="filter-header-wrapper">
      <Filters
        options={optionsForSelector}
        currentValue={currentReactSelectorValue || []}
        clearFilter={clearFiltersBtn}
        searchFn={searchFn_}
        setFilter={setFilterFn}
        min={filtersFromLS?.minPrice || filterObj.minPrice || ""}
        max={filtersFromLS?.maxPrice || filterObj.maxPrice || ""}
      />

      <Pagination
        currentPerPage={filterObj.perPage}
        choosePerPage={searchFn_}
        chooseNextPage={searchFn_}
        page={filterObj.page}
        nextPrevAvaliable={nextPrevObjectAvaliab}
        perPageVars={PER_PAGE_VARS}
      />
    </div>
  );
};

export default SearchRow;
