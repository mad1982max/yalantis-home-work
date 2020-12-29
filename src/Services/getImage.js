const images = require.context("../Shares/img", true);

const getImageByName = (name) => {
  let currentImage;
  try {
    currentImage = images(`./${name}.png`);
  } catch (e) {
    currentImage = images(`./dummy.png`);
  }
  return currentImage.default;
};

export default getImageByName;
