import { materialOrder, typeOrder } from "Constants/config";

const nameParser = (fullName) => {
  const material =
    fullName.split(" ")[materialOrder]?.toLowerCase() || "[NoName]";
  const type = fullName.split(" ")[typeOrder]?.toLowerCase() || "[NoName]";
  return { material, type };
};

export { nameParser };
