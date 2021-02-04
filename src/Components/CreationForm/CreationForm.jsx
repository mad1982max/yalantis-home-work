import { useFormik } from "formik";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import Msg from "Components/Msg/Msg";
import Input from "Components/Input/Input";
import { useCreateProduct } from "Bus/Hooks/addProductHook";
import { originArr } from "Bus/Selectors/originsSelector";
import { MIN_LENGTH_NAME, MAX_LENGTH_NAME } from "Constants/constants";
import "Components/CreationForm/creationForm.css";

const CreationForm = () => {
  const origins = useSelector(originArr);
  const { createNew, message } = useCreateProduct();

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
          className="formInput"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <Msg type="alert" msg={formik.errors.name} />

        <Input
          htmlName="Origin"
          name="origin"
          className="formInput"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.origin}
        />
        <Msg type="alert" msg={formik.errors.origin} />

        <Input
          htmlName="Price"
          name="price"
          className="formInput"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        <Msg type="alert" msg={formik.errors.price} />

        {message.msg ? (
          <Msg type={message.type} msg={message.msg} title={message.title} />
        ) : (
          <button
            disabled={!(formik.isValid && formik.dirty)}
            className="newProductSubmit"
            type="submit">
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default CreationForm;
