export const originArr = (state) =>
  state.allOrigins.origins.map((item) => item.value);

export const origingsAreLoaded = (state) => state.allOrigins.loading;
