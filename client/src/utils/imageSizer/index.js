// resizes the image based on its height and width.
// decreased by value decreesBy.
const imageSizer = ({ url, width, height, decreesBy, checkSmall }) => {

  const setDimensions = () => {
    if (width > 2000 || height > 3000) {
      return {
        newHeight: Math.floor(height / decreesBy),
        newWidth: Math.floor(width / decreesBy)
      };
    } else {
      return {
        newHeight: height,
        newWidth: width
      };
    }
  };

  const { newHeight, newWidth } = setDimensions();

  const splitUrl = url.split('upload/');
  const [baseUrl, ...rest] = splitUrl;
  const newArray = rest.join('upload/');

  return `${baseUrl}upload/h_${newHeight},w_${newWidth}/${newArray}`;
};

export default imageSizer;