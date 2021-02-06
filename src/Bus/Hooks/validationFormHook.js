import * as Yup from "yup";
import { useSelector } from "react-redux";
import { MIN_LENGTH_NAME, MAX_LENGTH_NAME } from "Constants/constants";
import { originArr } from "Bus/Selectors/originsSelector";

const useValidationHook = () => {
  const origins = useSelector(originArr);
  const createValidationScheme = () => {
    return Yup.object({
      name: Yup.string()
        .matches(/^\D+$/, "Must be a string")
        .min(MIN_LENGTH_NAME, `Must be more then ${MIN_LENGTH_NAME} characters`)
        .max(MAX_LENGTH_NAME, `Must be ${MAX_LENGTH_NAME} characters or less`)
        .required("Required"),
      price: Yup.number()
        .typeError("Must be a number")
        .positive("Must be a positive number")
        .required("Required"),
      origin: Yup.string()
        .oneOf(origins, `must be one of: ${origins.join(", ").toUpperCase()}`)
        .required("Required"),
    });
  };
  return { createValidationScheme };
};

export { useValidationHook };
