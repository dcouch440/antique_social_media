const antiqueImage = () => {
  const env = process.env.NODE_ENV;
  if (env === 'test') { return './db/seeds/seed-images/test-bottles.jpeg'; }
  else { return './db/seeds/seed-images/bottles.jpeg'; }
};

const userImage = () => {
  const env = process.env.NODE_ENV;
  if (env === 'test') { return './db/seeds/seed-images/test-wall.jpeg'; }
  else { return './db/seeds/seed-images/wall.jpeg'; }
};

module.exports = { antiqueImage, userImage };
