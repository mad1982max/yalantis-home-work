import { useFormik } from "formik";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import ErrorMsg from "Components/ErrorMsg/ErrorMsg";
import Input from "Components/Input/Input";
import { originArr } from "Bus/Selectors/originsSelector";
import { MIN_LENGTH_NAME, MAX_LENGTH_NAME } from "Constants/constants";
import "Components/CreationForm/creationForm.css";

const CreationForm = () => {
  const origins = useSelector(originArr);

  const formik = useFormik({
    initialValues: {
      productName: "",
      productPrice: "",
      productOrigin: "",
    },
    validationSchema: Yup.object({
      productName: Yup.string()
        .matches(/^\D+$/, "Must be a string")
        .min(MIN_LENGTH_NAME, `Must be more then ${MIN_LENGTH_NAME} characters`)
        .max(MAX_LENGTH_NAME, `Must be ${MAX_LENGTH_NAME} characters or less`)
        .required("Required"),
      productPrice: Yup.number()
        .typeError("Must be a number")
        .positive("Must be a positive number")
        .required("Required"),
      productOrigin: Yup.string()
        .oneOf(origins, `must be one of: ${origins.join(", ").toUpperCase()}`)
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="creationForm">
      <form className="formik" onSubmit={formik.handleSubmit}>
        <Input
          htmlName="Name"
          name="productName"
          className="productName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <ErrorMsg msg={formik.errors.productName} />

        <Input
          htmlName="Origin"
          name="productOrigin"
          className="productOrigin"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <ErrorMsg msg={formik.errors.productOrigin} />

        <Input
          htmlName="Price"
          name="productPrice"
          className="productPrice"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <ErrorMsg msg={formik.errors.productPrice} />

        <button
          disabled={!(formik.isValid && formik.dirty)}
          className="newProductSubmit"
          type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreationForm;
