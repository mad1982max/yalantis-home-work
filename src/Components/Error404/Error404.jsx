import "Components/Error404/error404.css";

const Error404 = (props) => {
  const msg = props.location.state || "Sorry, root doesn't exist";
  return <div className="error">{msg}</div>;
};

export default Error404;
