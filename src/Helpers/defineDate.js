import moment from "moment";
import { dateFormat } from "Helpers/config";

const defineDate = (date) => moment(date).format(dateFormat);
export default defineDate;
