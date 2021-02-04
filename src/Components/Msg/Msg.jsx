import "Components/Msg/msg.css";
const Msg = ({ msg, type, title = "" }) => (
  <>
    {msg ? (
      <div
        className={
          type === "alert"
            ? "error-msg message-wrapper"
            : "info-msg message-wrapper"
        }>
        {title && <div className="title">{title}</div>}
        <div className={title ? "msg marginBottom" : "msg"}>{msg}</div>
      </div>
    ) : null}
  </>
);

export default Msg;
