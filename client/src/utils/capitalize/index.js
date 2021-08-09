const capitalize = s => {
  if (typeof s === 'number') {
    return s;
  }
  if (typeof s !== 'string') {
    return '';
  }
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export default capitalize;