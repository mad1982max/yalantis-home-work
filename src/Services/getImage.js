import { dummyImgName, defaultImgExt } from "../Shares/config";

const images = require.context("../Shares/img", true);

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
