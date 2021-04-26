const button = ({onClick, text, type, className}) => (
  <button onClick={onClick} type={type} className={className}>
    {text}
  </button>
)
export default button