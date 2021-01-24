const url = "https://yalantis-react-school-api.yalantis.com/api/v1/products";
const urlOrigins =
  "https://yalantis-react-school-api.yalantis.com/api/v1/products-origins";
const pathWithoutBasketWidget = "/basket";
const dummyImgName = "dummy";
const defaultImgExt = "png";
const dateFormat = "MM-DD-YYYY";
const materialOrder = 1;
const typeOrder = 2;
const question = "Are you sure?";
const defaultRequest = {
  origin: [],
  perPage: 10,
  currentPage: 1,
};
const perPageVars = [10, 25, 50];

export {
  url,
  pathWithoutBasketWidget,
  dummyImgName,
  defaultImgExt,
  dateFormat,
  materialOrder,
  typeOrder,
  question,
  urlOrigins,
  defaultRequest,
  perPageVars,
};
