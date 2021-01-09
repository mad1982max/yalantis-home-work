import { originOrder, typeOrder } from "Helpers/config";

const nameParser = (fullName) => {
  const origin = fullName.split(" ")[originOrder].toLowerCase();
  const type = fullName.split(" ")[typeOrder].toLowerCase();
  return { origin, type };
};

export default nameParser;
