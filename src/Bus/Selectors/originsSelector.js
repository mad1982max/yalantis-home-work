export const originArr = (state) =>
  state.allOrigins.origins.map((item) => item.value);

export const loading = (state) => state.allOrigins.loading;
