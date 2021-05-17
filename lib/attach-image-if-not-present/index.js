const attachImageIfNotPresent = ({ images, antique_id }) => {
  if (images.length === 0) {
    return [{
      url: 'add failsafe',
      height: '500',
      width: '500',
      antique_id
    }];
  } else {
    return images;
  }
};

module.exports = attachImageIfNotPresent;