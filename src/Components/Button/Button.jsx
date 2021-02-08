import classNames from "classnames";
import "Components/Button/button.css";

const Button = ({
  className,
  onClick,
  type = "button",
  title = "",
  image = "",
  disabled = false,
  id = null,
}) => {
  return (
    <>
      {title && (
        <button
          key={id}
          className={classNames("defaultBtn", className)}
          onClick={onClick}
          disabled={disabled}
          type={type}>
          {title}
        </button>
      )}

      {image && (
        <button
          key={id}
          className={classNames("defaultBtn", className)}
          onClick={onClick}
          disabled={disabled}
          type={type}>
          <img src={image} alt="dummy desc" />
        </button>
      )}
    </>
  );
};

export default Button;
