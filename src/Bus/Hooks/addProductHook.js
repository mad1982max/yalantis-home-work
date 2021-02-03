import { createProduct } from "Bus/API/product";

const useCreateProduct = () => {
  const createNew = (product) => createProduct(product);
  return { createNew };
};
export { useCreateProduct };
