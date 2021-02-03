import "Components/ErrorMsg/errorMsg.css";
const ErrorMsg = ({ msg }) => (
  <>{msg ? <div className="error-msg">{msg}</div> : null}</>
);

export default ErrorMsg;
