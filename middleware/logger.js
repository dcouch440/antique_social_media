const handleException = ({res, status, err}) => {

  console.error(err);
  res.status(status).json({
    ...err,
    callStack: new Error()
      .stack.replace(/(\r\n|\n|\r)/gm, "")
      .replace(/\s+/g, ' ').trim()
  });

};


module.exports = { handleException };