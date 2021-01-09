import { dummyImgName, defaultImgExt } from "Helpers/config";

const images = require.context("Helpers/img/cardImg", false);

const getImageByName = (name) => {
  let currentImage;
  try {
    currentImage = images(`./${name}.${defaultImgExt}`);
  } catch (e) {
    currentImage = images(`./${dummyImgName}.${defaultImgExt}`);
  }
  return currentImage.default;
};

export default getImageByName;
