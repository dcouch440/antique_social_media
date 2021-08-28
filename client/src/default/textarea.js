const textArea = ({ onClick, text, type, className }) => (
  <textarea
    className={className}
    type={type}
    onClick={onClick}
  >
    {text}
  </textarea>
);

export default textArea;