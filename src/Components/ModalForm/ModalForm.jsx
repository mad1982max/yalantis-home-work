import { useFormik } from "formik";
import Msg from "Components/Msg/Msg";
import Input from "Components/Input/Input";
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
