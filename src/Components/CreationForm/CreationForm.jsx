import { useFormik } from "formik";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { originArr } from "Bus/Selectors/originsSelector";
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
        .min(3, "Must be more then 3 characters")
        .max(20, "Must be 20 characters or less")
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
      const object = { ...values, createdOn: new Date() };
      alert(JSON.stringify(object, null, 2));
    },
  });

  return (
    <div className="creationForm">
      <form className="formik" onSubmit={formik.handleSubmit}>
        <label htmlFor="productName">Name</label>
        <input
          id="productName"
          name="productName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.productName ? (
          <div className="error-msg">{formik.errors.productName}</div>
        ) : null}
        <label htmlFor="productOrigin">Origin</label>
        <input
          id="productOrigin"
          name="productOrigin"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.productOrigin ? (
          <div className="error-msg">{formik.errors.productOrigin}</div>
        ) : null}
        <label htmlFor="productPrice">Price</label>
        <input
          id="productPrice"
          name="productPrice"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.productPrice ? (
          <div className="error-msg">{formik.errors.productPrice}</div>
        ) : null}

        <button className="newProductSubmit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreationForm;
