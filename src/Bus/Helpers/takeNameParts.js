import { MAT_ORDER, TYPE_ORDER } from "Constants/constants";

const nameParser = (fullName) => {
  const material = fullName.split(" ")[MAT_ORDER]?.toLowerCase() || "[NoName]";
  const type = fullName.split(" ")[TYPE_ORDER]?.toLowerCase() || "[NoName]";
  return { material, type };
};

export { nameParser };
