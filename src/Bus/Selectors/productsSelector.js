export const allProducts = (state) => state.allProducts.products;
export const loading = (state) => state.allProducts.loading;
export const pageParams = (state) => state.allProducts.pageParams;
export const filters = (state) => state.allProducts.filters;
export const myProducts = (state) => state.allProducts.myProducts;

export const requestParams = (state) => ({
  ...state.allProducts.pageParams,
  ...state.allProducts.filters,
});
