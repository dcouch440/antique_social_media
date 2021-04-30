const yup = require('yup');

module.exports = {
  antiqueParams: yup.object().shape(
    {
      name: yup
        .string()
        .required()
        .trim()
        .lowercase(),
      year: yup
        .number()
        .min(-1000),
      user_id: yup
        .number()
        .required()
    }
  ),
  queryParams: yup.object().shape(
    {
      LIMIT: yup
        .number()
        .min(0),
      OFFSET: yup
        .number()
        .min(0),
    }
  )
};