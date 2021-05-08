const textarea = ({ onClick, text, type, className }) => (
  <textarea onClick={onClick} type={type} className={className}>
    {text}
  </textarea>
);
export default textarea;