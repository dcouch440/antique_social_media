import faker from 'faker';
import tall from './img/bottle-tall.jpg';
import wide from './img/bottle-wide.jpg';

const images = [tall, wide];

const randomizer = (max) => Math.floor(Math.random() * max);

export default [...Array(10)].map((u, i) => {
  const randomNumber = randomizer(2);

  const dimensions = {
    height: randomNumber !== 0 ? 2000 : 1600,
    width: randomNumber !== 0 ? 3000 : 1200
  }

  return {
    name: faker.commerce.productAdjective(),
    year: randomizer(1900),
    id: i,
    body: faker.lorem.words(200),
    ...dimensions,
    image: images[randomNumber]
  }
});
