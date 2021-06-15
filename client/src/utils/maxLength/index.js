const maximumLength = (str, length = 12) => str.length > length ? str.slice(0, length) + '...' : str;

export default maximumLength;