export const allProducts = (state) => state.allProducts.products;
export const allProductsLoading = (state) => state.allProducts.loading;
export const pageParams = (state) => state.allProducts.pageParams;
export const filters = (state) => state.allProducts.filters;

export const requestParams = (state) => ({
  ...state.allProducts.pageParams,
  ...state.allProducts.filters,
});
