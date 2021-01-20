import { dummyImgName, defaultImgExt } from "Constants/config";

const images = require.context("Assets/img/cardImg", false);

const getImageByName = (name) => {
  let currentImage;
  try {
    currentImage = images(`./${name}.${defaultImgExt}`);
  } catch (e) {
    currentImage = images(`./${dummyImgName}.${defaultImgExt}`);
  }
  return currentImage.default;
};

export { getImageByName };
