import classNames from "classnames";
import "Components/FormMessage/msg.css";
const Msg = ({ msg, type, title = "" }) => (
  <>
    {msg ? (
      <div
        className={classNames("message-wrapper", {
          "error-msg": type === "alert",
          "info-msg": type === "info",
        })}>
        {title && <div className="title">{title}</div>}

        <div
          className={classNames("msg", {
            marginBottom: title,
          })}>
          {msg}
        </div>
      </div>
    ) : null}
  </>
);

export default Msg;
