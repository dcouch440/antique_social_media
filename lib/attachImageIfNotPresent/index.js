
// attach avatar if the user comes back from the cloud without an image.

module.exports = function attachImageIfNotPresent ({ images, antique_id }) {
  try {
    if (images.resources.length === 0) {
      // front end expects an array.
      return [{
        safe_url: 'https://res.cloudinary.com/dbyretay5/image/upload/v1621440540/no_image_vbq6q7.png',
        secure_url: 'http://res.cloudinary.com/dbyretay5/image/upload/v1621440540/no_image_vbq6q7.png',
        height: '511',
        width: '1419',
        antique_id
      }];
    } else {
      return images;
    }
  } catch (err) {
    console.error(err);
  }
};
