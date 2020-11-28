import React from "react";
import renderer from "react-test-renderer";
import {TabReviews} from "./tab-reviews";

const movie = {
  backgroundColor: `#FDFDFC`,
  backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Snatch.jpg`,
  description: `Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.`,
  director: `Guy Ritchie`,
  genre: `Comedy`,
  id: 13,
  isFavorite: false,
  name: `Snatch`,
  posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Snatch.jpg`,
  previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/snatch.jpg`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  rating: 0.2,
  released: 2000,
  runTime: 104,
  scoresCount: 716577,
  starring: [`Jason Statham`, `Brad Pitt`, `Benicio Del Toro`],
  videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`
};

const comment = {
  comment: `I love this movie. This film is a milestone in cinematography. Great Immersive camera-work. This film is an experience and i has already seen it 4 times and I only see more quality of the film.`,
  date: `2020-10-09T13:38:44.769Z`,
  id: 1,
  rating: 3.3,
  user: {id: 19, name: `Christina`}
};

const noop = () => {};

it(`TabReviews is rendered correctly`, () => {
  const tree = renderer.create(
      <TabReviews movie={movie} onLoadComments={noop} comments={[comment]} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
