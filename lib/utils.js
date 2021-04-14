// const doThis = ({number, action}) => {
//   for (let index = 0; index < number; index++){
//     action()
//   }
// }

const objLength = (obj) => {
  return Object.keys(obj).length
}


// const handleError = ({atClass, ...err}) => {
//   const {message, name, value, errors:[...errors] } = err
//   return {message, name, value, errors: {...errors}, from: atClass.constructor.name}
// }

const parseObjectInts = (obj) => {
	const objPrimType = Object.entries(obj).map(([key,value])=> {
    const isInt = /^\d+$/.test(value);
    const setValue = isInt ? parseInt(value) : value;
    return [key, setValue];
	});
  return Object.fromEntries(objPrimType)
}

module.exports = { objLength, parseObjectInts };
