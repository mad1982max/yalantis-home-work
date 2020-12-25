import axios from "axios";
import url from "../Shares/config";

const api = {
  getAll: () => {
    return axios.get(url.getAll);
  },
};

export default api;
