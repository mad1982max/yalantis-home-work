import { materialOrder, typeOrder } from "Constants/config";

const nameParser = (fullName) => {
  const material = fullName.split(" ")[materialOrder].toLowerCase();
  const type = fullName.split(" ")[typeOrder].toLowerCase();
  return { material, type };
};

export { nameParser };
