import axios from "axios";
import url from "../Shares/config";

const totalProducts = 20;

const api = {
  getAll: () => axios.get(`${url}?perPage=${totalProducts}`),
  getProductById: (id) => axios.get(`${url}/${id}`),
};

export default api;
