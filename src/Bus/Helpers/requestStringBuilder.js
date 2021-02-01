const stringBuilder = (options) => {
  const perPagePart = `perPage=${options.perPage}`;
  const originPart =
    options.origin?.length > 0 ? `origins=${options.origin}` : "t=1";
  const minPricePart = options.minPrice
    ? `minPrice=${options.minPrice}`
    : "t=2";
  const maxPricePart = options.maxPrice
    ? `maxPrice=${options.maxPrice}`
    : "t=3";
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
