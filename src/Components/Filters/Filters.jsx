import Select from "react-select";
import Input from "Components/Input/Input";
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
          <Input
            title="MIN:"
            name="min-price"
            className="price"
            onChange={(e) => setFilter({ minPrice: e.target.value })}
            value={min}
            type="text"
          />

          <Input
            title="MAX:"
            name="max-price"
            className="price"
            onChange={(e) => setFilter({ maxPrice: e.target.value })}
            value={max}
            type="text"
          />
        </div>
      </div>

      <div className="clearFilters">
        <button type="button" onClick={clearFilter}>
          CLEAR
        </button>
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
