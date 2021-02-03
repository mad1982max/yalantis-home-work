import { useFormik } from "formik";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import ErrorMsg from "Components/ErrorMsg/ErrorMsg";
import Input from "Components/Input/Input";
import { useCreateProduct } from "Bus/Hooks/addProductHook";
import { originArr } from "Bus/Selectors/originsSelector";
import { MIN_LENGTH_NAME, MAX_LENGTH_NAME } from "Constants/constants";
import "Components/CreationForm/creationForm.css";

const CreationForm = () => {
  const origins = useSelector(originArr);
  const { createNew } = useCreateProduct();

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      origin: "",
    },
    validationSchema: Yup.object({
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
    }),
    onSubmit: ({ name, price, origin }) => {
      const productJSON = JSON.stringify({
        product: { name, origin, price: +price },
      });
      createNew(productJSON);
    },
  });

  return (
    <div className="creationForm">
      <form className="formik" onSubmit={formik.handleSubmit}>
        <Input
          htmlName="Name"
          name="name"
          className="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <ErrorMsg msg={formik.errors.name} />

        <Input
          htmlName="Origin"
          name="origin"
          className="origin"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.origin}
        />
        <ErrorMsg msg={formik.errors.origin} />

        <Input
          htmlName="Price"
          name="price"
          className="price"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        <ErrorMsg msg={formik.errors.price} />

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
