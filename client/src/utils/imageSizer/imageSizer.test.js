import imageSizer from './index';

describe('imageSizer', () => {
  it('returns a new url that specifies a smaller size', () => {
    const imageUrl = {
      url: 'https://res.cloudinary.com/dbyretay5/image/upload/v1620878706/_ANTIQUE_2_/IMG_2077_ktiqu5.jpg',
      width: 10000,
      height: 10000,
      decreesBy: 10
    };
    expect(imageSizer(imageUrl))
      .toEqual("https://res.cloudinary.com/dbyretay5/image/upload/h_1000,w_1000/v1620878706/_ANTIQUE_2_/IMG_2077_ktiqu5.jpg");
  });
  it('returns url in the correct spot even if it contains multiple upload words', () => {
    const imageUrl = {
      url: 'https://res.cloudinary.com/dbyretay5/image/upload/v1620878706/upload/_ANTIQUE_2_/upload/IMG_2077_ktiqu5.jpg',
      width: 10000,
      height: 10000,
      decreesBy: 10
    };
    expect(imageSizer(imageUrl))
      .toEqual('https://res.cloudinary.com/dbyretay5/image/upload/h_1000,w_1000/v1620878706/upload/_ANTIQUE_2_/upload/IMG_2077_ktiqu5.jpg');
  });
});