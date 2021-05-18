const imageSizer = ({ url, width, height, decreesBy }) => {
  const newHeight = height / decreesBy;
  const newWidth = width / decreesBy;
  const splitUrl = url.split('upload/');
  const newUrl = [
    splitUrl[0] + `w_${newWidth},h_${newHeight}/`,
    ...splitUrl.splice(1)
  ];
  return newUrl.join('upload/');
};

export default imageSizer;