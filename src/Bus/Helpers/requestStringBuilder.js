const stringBuilder = (options) => {
  let requestString = "";
  if (options.perPage) {
    requestString += `perPage=${options.perPage}&`;
  }
  if (options.origin?.length > 0) {
    requestString += `origins=${options.origin}&`;
  }
  if (options.minPrice) {
    requestString += `minPrice=${options.minPrice}&`;
  }
  if (options.maxPrice) {
    requestString += `maxPrice=${options.maxPrice}&`;
  }
  if (options.currentPage) {
    requestString += `page=${options.currentPage}&`;
  }
  return requestString;
};

export { stringBuilder };
