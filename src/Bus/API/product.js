import axios from "axios";
import { URL, URL_ORIGINS, PRIVATE_KEY } from "Constants/constants";

const getById = (id) => {
  return axios.get(`${URL}/${id}`);
};

const getAll = (query) => {
  return axios.get(`${URL}?${query}`);
};

const createProduct = (product) => {
  return axios.post(URL, product, {
    headers: {
      Authorization: PRIVATE_KEY,
      "content-type": "application/json",
    },
  });
};

const getAllOrigins = () => {
  return axios.get(URL_ORIGINS);
};

export { getById, getAll, getAllOrigins, createProduct };
