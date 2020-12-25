import axios from "axios";
import url from "../Shares/config";

const api = {
  getAll: () => axios.get(url.getAll),
};

export default api;
