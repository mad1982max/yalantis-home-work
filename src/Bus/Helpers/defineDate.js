import moment from "moment";
import { DATE_FORMAT } from "Constants/constants";

const defineDate = (date) => moment(date).format(DATE_FORMAT);
export { defineDate };
