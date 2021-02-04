import "Components/Input/input.css";
const Input = ({ type, onChange, value, name, className, htmlName }) => (
  <>
    <label htmlFor={name}>{htmlName}</label>
    <input
      type={type}
      onChange={onChange}
      value={value}
      name={name}
      className={className}
    />
  </>
);

export default Input;
