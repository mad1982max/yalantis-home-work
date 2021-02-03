const Input = ({ type, onChange, value, name, id, htmlName }) => (
  <>
    <label htmlFor={name}>{htmlName}</label>
    <input type={type} onChange={onChange} value={value} name={name} id={id} />
  </>
);

export default Input;
