import axios from "axios";
import { URL, URL_ORIGINS, PRIVATE_KEY } from "Constants/constants";

const getById = (id) => axios.get(`${URL}/${id}`);

const getAll = (query) => axios.get(`${URL}?${query}`);

const createProduct = (product) => {
  return axios.post(URL, product, {
    headers: {
      Authorization: PRIVATE_KEY,
      "content-type": "application/json",
    },
  });
};

const getAllMyGoods = (query) => {
  return axios.get(`${URL}?${query}&editable=true`, {
    headers: {
      Authorization: PRIVATE_KEY,
      "content-type": "application/json",
    },
  });
};

const updateProduct = (id, product) => {
  console.log(product);
  return axios.patch(`${URL}/${id}`, product, {
    headers: {
      Authorization: PRIVATE_KEY,
      "content-type": "application/json",
    },
  });
};

const getAllOrigins = () => axios.get(URL_ORIGINS);

export {
  getById,
  getAll,
  getAllOrigins,
  createProduct,
  getAllMyGoods,
  updateProduct,
};
