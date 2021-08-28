const button = ({ onClick, text, type, className }) => (
  <button
    className={className}
    type={type}
    onClick={onClick}
  >
    {text}
  </button>
);

export default button;