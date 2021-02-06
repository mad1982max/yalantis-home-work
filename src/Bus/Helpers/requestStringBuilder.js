const stringBuilder = (options) => {
  const { totalItems, origins, ...restOptions } = options;
  if (origins.length === 0) {
    return new URLSearchParams(restOptions).toString();
  }
  return new URLSearchParams({ ...restOptions, origins }).toString();
};

export { stringBuilder };
