const imageSizer = ({ url, width, height, decreesBy }) => {
  const newHeight = Math.floor(height / decreesBy);
  const newWidth = Math.floor(width / decreesBy);
  const splitUrl = url.split('upload/');
  const [baseUrl, ...rest] = splitUrl;
  const newArray = rest.join('upload/');
  return `${baseUrl}upload/h_${newHeight},w_${newWidth}/${newArray}`;
};

export default imageSizer;