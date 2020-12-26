import axios from "axios";
import url from "../Shares/config";

const api = {
  getAll: () => axios.get(url),
  getProductById: (id) => axios.get(`${url}/${id}`),
};

export default api;
