const input = ({className, text, name, onChange}) => (
  <input onChange={onChange} className={className} name={name}>
    {text}
  </input>
);

export default input;