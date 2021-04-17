const objLength = (obj) => {
  return Object.keys(obj).length
}

const parseObjectInts = (obj) => {
	const objPrimType = Object.entries(obj).map(([key,value])=> {
    const isInt = /^\d+$/.test(value);
    const setValue = isInt ? parseInt(value) : value;
    return [key, setValue];
	});
  return Object.fromEntries(objPrimType)
}

module.exports = { objLength, parseObjectInts };
