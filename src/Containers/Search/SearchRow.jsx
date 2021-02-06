import { useSelector, useDispatch } from "react-redux";
// import BurgerMenuPortal from "Components/BurgerMenu/BurgerMenu";
import Pagination from "Components/Pagination/Pagination";
import Filters from "Components/Filters/Filters";
import { setVisibility } from "Bus/Slicers/pageSlicer";
import { requestParams } from "Bus/Selectors/productsSelector";
// import { menuVisibility } from "Bus/Selectors/pageSelector";
import { nextPrevBtnAvaliable } from "Bus/Helpers/nextPrevPageAvaliability";
import { createOptionsForReactSelector } from "Bus/Helpers/reactSelectExtractData";
import { useSearch } from "Bus/Hooks/searchHook";
import { setFilter, clearFilter } from "Bus/Slicers/productsSlicer";
import { useFetchedOrigins } from "Bus/Hooks/originsHook";
import { PER_PAGE_VARS } from "Constants/constants";
import menuIco from "Assets/img/ico/menu.png";
import "Containers/Search/searchRow.css";

const SearchRow = ({ source }) => {
  const { origins } = useFetchedOrigins();
  const filterObj = useSelector(requestParams);
  const dispatch = useDispatch();
  const { sendRequest } = useSearch();

  const showMenu = () => dispatch(setVisibility());

  const getFilteredData = () => {};

  const nextPage = (counter) => {
    let newPage = filterObj.page + counter;
    sendRequest(source, { ...filterObj, page: newPage });
  };

  const choosePerPage = (number) =>
    sendRequest(source, { ...filterObj, perPage: number, page: 1 });

  const clearFiltersBtn = () => {
    dispatch(clearFilter());
    sendRequest(source);
  };

  const searchFn = () => sendRequest(source, { ...filterObj, page: 1 });

  const setFilterFn = (obj) => dispatch(setFilter(obj));

  const optionsForSelector = createOptionsForReactSelector(origins);

  const currentReactSelectorValue = createOptionsForReactSelector(
    filterObj.origins
  );

  return (
    <div className="filter-header-wrapper">
      <div className="filterMenu">
        <button type="button" onClick={showMenu} className="hideMenu">
          <img src={menuIco} alt="menu" />
        </button>
      </div>
      {/* {burgerMenuvisibility && <BurgerMenuPortal />} */}

      <Filters
        options={optionsForSelector}
        currentValue={currentReactSelectorValue || []}
        clearFilter={clearFiltersBtn}
        searchFn={searchFn}
        setFilter={setFilterFn}
        min={filterObj.minPrice || ""}
        max={filterObj.maxPrice || ""}
      />

      <Pagination
        currentPerPage={filterObj.perPage}
        choosePerPage={choosePerPage}
        chooseNextPage={nextPage}
        page={filterObj.page}
        nextPrevAvaliable={nextPrevBtnAvaliable(
          filterObj.page,
          filterObj.perPage,
          filterObj.totalItems
        )}
        perPageVars={PER_PAGE_VARS}
      />
    </div>
  );
};

export default SearchRow;
