const stringBuilder = (options) => {
  const perPagePart = `perPage=${options.perPage}`;
  const originPart =
    options.origin?.length > 0 ? `origins=${options.origin}` : `origins=""`;
  const minPricePart = `minPrice=${options.minPrice}`;
  const maxPricePart = `maxPrice=${options.maxPrice}`;
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
