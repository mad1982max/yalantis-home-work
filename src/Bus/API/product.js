import axios from "axios";
import { URL, URL_ORIGINS } from "Constants/constants";

const getById = (id) => {
  return axios.get(`${URL}/${id}`);
};

const getAll = (query) => {
  return axios.get(`${URL}?${query}`);
};

const getAllOrigins = () => {
  return axios.get(URL_ORIGINS);
};

export { getById, getAll, getAllOrigins };
