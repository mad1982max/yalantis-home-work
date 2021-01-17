import moment from "moment";
import { dateFormat } from "Constants/config";

const defineDate = (date) => moment(date).format(dateFormat);
export { defineDate };
