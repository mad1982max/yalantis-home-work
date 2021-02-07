import { useFormik } from "formik";
import Msg from "Components/Msg/Msg";
import { useValidationHook } from "Bus/Hooks/validationFormHook";
import { useCreateProduct } from "Bus/Hooks/addProductHook";
import "Components/ModalForm/modalForm.css";

const CreationForm = ({
  type,
  closeOnClick,
  name = "",
  price = "",
  id = "",
  origin = "",
}) => {
  console.log(type, name, price, origin, id);
  const { createNew, message } = useCreateProduct();
  const { createValidationScheme } = useValidationHook();

  const formik = useFormik({
    initialValues: {
      name: name,
      price: price,
      origin: origin,
    },
    validationSchema: createValidationScheme(),

    onSubmit: ({ name, price, origin }) => {
      const productJSON = JSON.stringify({
        product: { name, origin, price: +price },
      });
      if (type === "portal-edit") {
        console.log("Should be update");
      } else {
        createNew(productJSON);
      }
    },
  });

  return (
    <div className="creationForm">
      <button type="button" className="close-edit-modal" onClick={closeOnClick}>
        X
      </button>
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

        <label htmlFor="price">PRICE</label>
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
            {type === "portal-edit" ? "EDIT" : "SUBMIT"}
          </button>
        )}
      </form>
    </div>
  );
};

export default CreationForm;
