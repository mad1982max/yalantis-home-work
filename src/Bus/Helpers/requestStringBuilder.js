const stringBuilder = (options) => {
  return new URLSearchParams(options).toString();
};

export { stringBuilder };
