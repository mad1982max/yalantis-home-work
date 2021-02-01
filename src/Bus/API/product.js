import axios from "axios";
import { URL } from "Constants/constants";

const getById = (id) => {
  return axios.get(`${URL}/${id}`);
};

const getAll = (query) => {
  return axios.get(`${URL}?${query}`);
};

export { getById, getAll };
