import "Components/Input/Input";

const Input = ({ name, type, onChange, value, className, title }) => {
  return (
    <>
      <label htmlFor={name}>{title}</label>
      <input
        type={type}
        onChange={onChange}
        value={value}
        name={name}
        className={className}
      />
    </>
  );
};

export default Input;
