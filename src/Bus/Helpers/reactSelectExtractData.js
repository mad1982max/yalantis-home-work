const createOptionsForReactSelector = (item) =>
  item?.map((item) => ({ value: item, label: item } || []));

const optionReactSelectorToArray = (item) =>
  item?.map((filter) => filter.value) || [];

export { createOptionsForReactSelector, optionReactSelectorToArray };
