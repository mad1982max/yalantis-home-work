const URL = "https://yalantis-react-school-api.yalantis.com/api/v1/products";
const URL_ORIGINS =
  "https://yalantis-react-school-api.yalantis.com/api/v1/products-origins";
const PRIVATE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6IkJlenJvZG55aSBNYWtzeW0iLCJpYXQiOjE2MTExNzQwNDIsImV4cCI6MTYxNjM1ODA0Mn0.frUwenJ8gtPoXQXvbe9M06m8_vyCHAEBnvY1-h6Yo8k";
const EXCLUDE_BASKET_PASS = "/basket";
const DUMMY_IMG = "dummy";
const DEFAULT_EXT = "png";
const DATE_FORMAT = "MM-DD-YYYY";
const MAT_ORDER = 1;
const TYPE_ORDER = 2;
const QUESTION = "Are you sure?";
const DEFAULT_REQUEST = {
  origins: [],
  perPage: 10,
  page: 1,
};
const MSG_TIMER = 3000;
const MIN_LENGTH_NAME = 3;
const MAX_LENGTH_NAME = 20;
const PER_PAGE_VARS = [10, 25, 50];
const CURR_WORK_GOODS_ARR = {
  ALL: "all",
  MY: "my",
};
const QUANT_KEY = "quantity";
const PORTAL_EDIT_ROOT = "portal-edit";
const PORTAL_CREATE_ROOT = "portal-create";

export {
  URL,
  URL_ORIGINS,
  EXCLUDE_BASKET_PASS,
  DUMMY_IMG,
  DEFAULT_EXT,
  PORTAL_EDIT_ROOT,
  PORTAL_CREATE_ROOT,
  DATE_FORMAT,
  MAT_ORDER,
  TYPE_ORDER,
  QUESTION,
  DEFAULT_REQUEST,
  PER_PAGE_VARS,
  PRIVATE_KEY,
  MIN_LENGTH_NAME,
  MAX_LENGTH_NAME,
  MSG_TIMER,
  CURR_WORK_GOODS_ARR,
  QUANT_KEY,
};
