const textInput = ({ className, text, name, onChange }) => (
  <input
    className={className}
    name={name}
    onChange={onChange}
  >
    {text}
  </input>
);

export default textInput;