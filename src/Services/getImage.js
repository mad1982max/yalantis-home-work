import { dummyImgName, defaultImgExt } from "Shares/config";

const images = require.context("Shares/img", false);

const getImageByName = (name) => {
  let currentImage;
  try {
    currentImage = images(`./${name}.${defaultImgExt}`);
  } catch (e) {
    currentImage = images(`./${dummyImgName}.${defaultImgExt}`);
    console.log("use default img");
  }
  return currentImage.default;
};

export default getImageByName;
