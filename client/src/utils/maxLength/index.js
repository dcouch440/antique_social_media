// sets the max length of a word and returns an ellipsis if its to long.
const maximumLength = (str, length = 12) => {
  return str.length > length ? str.slice(0, length) + '...' : str;
};

export default maximumLength;