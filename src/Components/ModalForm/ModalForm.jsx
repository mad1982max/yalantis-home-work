import { useFormik } from "formik";
import Msg from "Components/Msg/Msg";
import { useValidationHook } from "Bus/Hooks/validationFormHook";
import { useCreateProduct } from "Bus/Hooks/addProductHook";
import "Components/ModalForm/modalForm.css";

const CreationForm = () => {
  const { createNew, message } = useCreateProduct();
  const { createValidationScheme } = useValidationHook();

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      origin: "",
    },
    validationSchema: createValidationScheme(),

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
        <label htmlFor="name">NAME</label>
        <input
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          name="name"
          className="formInput"
        />
        <Msg type="alert" msg={formik.errors.name} />

        <label htmlFor="origin">ORIGIN</label>
        <input
          type="text"
          onChange={formik.handleChange}
          value={formik.values.origin}
          name="origin"
          className="formInput"
        />
        <Msg type="alert" msg={formik.errors.origin} />

        <label htmlFor="price">ORIGIN</label>
        <input
          type="text"
          onChange={formik.handleChange}
          value={formik.values.price}
          name="price"
          className="formInput"
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
