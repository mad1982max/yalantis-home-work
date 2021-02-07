import { useFormik } from "formik";
import Msg from "Components/Msg/Msg";
import { useValidationHook } from "Bus/Hooks/validationFormHook";
import { useCreateProduct } from "Bus/Hooks/addProductHook";
import { useUpdateProduct } from "Bus/Hooks/updateProductHook";
import { PORTAL_EDIT_ROOT } from "Constants/constants";
import "Components/ModalForm/modalForm.css";

const CreationForm = ({
  type,
  closeOnClick,
  name = "",
  price = "",
  id = "",
  origin = "",
}) => {
  const { createNew, message } = useCreateProduct();
  const {
    update,
    messageUpdated,
    answerIsConfirmed,
    setConfirm,
  } = useUpdateProduct();
  const { createValidationScheme } = useValidationHook();

  const confirmationFn = (e, isConfirm) => {
    if (isConfirm) {
      const { name, origin, price } = formik.values;
      const productJSON = JSON.stringify({
        product: { name, origin, price: +price },
      });
      update(id, productJSON);
      setConfirm(true);
    } else {
      setConfirm(true);
    }
  };

  const formik = useFormik({
    initialValues: {
      name,
      price,
      origin,
    },
    validationSchema: createValidationScheme(),

    onSubmit: ({ name, price, origin }) => {
      const productJSON = JSON.stringify({
        product: { name, origin, price: +price },
      });
      if (type === PORTAL_EDIT_ROOT) {
        setConfirm(false);
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

        {message.msg || messageUpdated.msg ? (
          <Msg
            type={message.type || messageUpdated.type}
            msg={message.msg || messageUpdated.msg}
            title={message.title || messageUpdated.title}
          />
        ) : (
          <button
            disabled={!(formik.isValid && formik.dirty)}
            className="newProductSubmit"
            type="submit">
            {type === PORTAL_EDIT_ROOT ? "EDIT" : "SUBMIT"}
          </button>
        )}
        {answerIsConfirmed ? (
          ""
        ) : (
          <div className="confirm-answer-wrapper">
            <button
              className="confirm-answer-yes"
              onClick={(e) => confirmationFn(e, true)}>
              YES
            </button>
            <button
              className="confirm-answer-no"
              onClick={(e) => confirmationFn(e, false)}>
              NO
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default CreationForm;
