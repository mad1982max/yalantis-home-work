import "Components/Msg/msg.css";
const Msg = ({ msg, type, title = "" }) => (
  <>
    {msg ? (
      <div
        className={
          type === "alert"
            ? "error-msg message-wrapper"
            : "info-msg message-wrapper"
        }
      >
        <div className="title">{title}</div>
        <div className="msg">{msg}</div>
      </div>
    ) : null}
  </>
);

export default Msg;
