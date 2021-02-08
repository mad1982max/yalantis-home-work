import { useFormik } from "formik";
import Msg from "Components/Msg/Msg";
import Input from "Components/Input/Input";
import { useSearch } from "Bus/Hooks/searchHook";
import { useValidationHook } from "Bus/Hooks/validationFormHook";
import { useCreateProduct } from "Bus/Hooks/addProductHook";
import { useUpdateProduct } from "Bus/Hooks/updateProductHook";
import { PORTAL_EDIT_ROOT, CURR_WORK_GOODS_ARR } from "Constants/constants";
import "Components/ModalForm/modalForm.css";

const CreationForm = ({
  type,
  closeOnClick,
  name = "",
  price = "",
  id = "",
  origin = "",
}) => {
  const { sendRequest } = useSearch();
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
      update(id, formik.values);
      setConfirm(true);
      sendRequest(CURR_WORK_GOODS_ARR.MY);
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
        <Input
          title="NAME"
          name="name"
          className="formInput"
          onChange={formik.handleChange}
          value={formik.values.name}
          type="text"
        />
        <Msg type="alert" msg={formik.errors.name} />

        <Input
          title="ORIGIN"
          name="origin"
          className="formInput"
          onChange={formik.handleChange}
          value={formik.values.origin}
          type="text"
        />
        <Msg type="alert" msg={formik.errors.origin} />

        <Input
          title="PRICE"
          name="price"
          className="formInput"
          onChange={formik.handleChange}
          value={formik.values.price}
          type="text"
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
              type="button"
              className="confirm-answer-yes"
              onClick={(e) => confirmationFn(e, true)}>
              YES
            </button>
            <button
              type="button"
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
