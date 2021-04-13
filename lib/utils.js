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

module.exports = { objLength };
