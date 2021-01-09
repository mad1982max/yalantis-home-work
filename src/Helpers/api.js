import axios from "axios";
import { url, productsPerPage } from "Helpers/config";

const api = {
  getAll: () => axios.get(`${url}?perPage=${productsPerPage}`),
  getProductById: (id) => axios.get(`${url}/${id}`),
};

export default api;
