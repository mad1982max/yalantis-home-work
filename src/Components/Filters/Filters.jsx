import Select from "react-select";
import { optionReactSelectorToArray } from "Bus/Helpers/reactSelectExtractData";
import "Components/Filters/filters.css";

const Filters = ({
  options,
  searchFn,
  clearFilter,
  setFilter,
  currentValue,
  min,
  max,
}) => (
  <div className="filter-wrapper">
    <div className="origin-filter-wrapper">
      <Select
        value={currentValue}
        options={options}
        isMulti
        onChange={(item) => {
          const originArr = optionReactSelectorToArray(item);
          setFilter({ origins: originArr });
        }}
      />
    </div>
    <div className="rest-filters">
      <div className="price-filter-wrapper">
        <div className="min-max-wrapper">
          <label htmlFor="min-price">MIN:</label>
          <input
            className="price"
            type="text"
            id="min-price"
            value={min}
            name="min-price"
            onChange={(e) => setFilter({ minPrice: e.target.value })}
          />

          <label htmlFor="max-price">MAX:</label>
          <input
            className="price"
            type="text"
            id="max-price"
            name="max-price"
            value={max}
            onChange={(e) => setFilter({ maxPrice: e.target.value })}
          />
        </div>
      </div>

      <div className="clearFilters">
        <button onClick={clearFilter}>CLEAR </button>
      </div>

      <div className="searchBtn">
        <button type="button" onClick={searchFn}>
          SEARCH
        </button>
      </div>
    </div>
  </div>
);

export default Filters;
