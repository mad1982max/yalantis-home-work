const stringBuilder = (options) => {
  const perPagePart = `perPage=${options.perPage}`;
  const originPart =
    options.origin?.length > 0 ? `origins=${options.origin}` : "";
  const minPricePart = options.minPrice ? `minPrice=${options.minPrice}` : "";
  const maxPricePart = options.maxPrice ? `maxPrice=${options.maxPrice}` : "";
  const currPagePart = `page=${options.currentPage}`;

  const requestString = [
    perPagePart,
    originPart,
    minPricePart,
    maxPricePart,
    currPagePart,
  ].join("&");

  return requestString;
};

export { stringBuilder };
