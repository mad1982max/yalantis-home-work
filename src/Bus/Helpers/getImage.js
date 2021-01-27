import { DUMMY_IMG, DEFAULT_EXT } from "Constants/constants";

const images = require.context("Assets/img/cardImg", false);

const getImageByName = (name) => {
  try {
    return images(`./${name}.${DEFAULT_EXT}`).default;
  } catch (e) {
    return images(`./${DUMMY_IMG}.${DEFAULT_EXT}`).default;
  }
};

export { getImageByName };
