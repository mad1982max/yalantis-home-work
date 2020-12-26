const images = require.context("../Shares/img", true);

const getImageByName = (name) => {
  let currentImage;
  try {
    currentImage = images(`./${name}.png`).default;
  } catch (e) {
    currentImage = images(`./dummy.png`).default;
  }
  return currentImage;
};

export default getImageByName;
