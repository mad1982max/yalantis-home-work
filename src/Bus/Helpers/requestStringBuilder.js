const stringBuilder = (options) => {
  const perPgePart = `perPage=${options.perPage}`;
  const originPart =
    options.origin?.length > 0 ? `origins=${options.origin}` : "";
  const minPricePart = `minPrice=${options.minPrice}`;
  const maxPricePart = `maxPrice=${options.maxPrice}`;
  const currPagePart = `page=${options.currentPage}`;

  const requestString = [
    perPgePart,
    originPart,
    minPricePart,
    maxPricePart,
    currPagePart,
  ].join("&");

  return requestString;
};

export { stringBuilder };
