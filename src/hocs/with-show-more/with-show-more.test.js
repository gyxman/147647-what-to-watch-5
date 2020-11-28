import React from "react";
import PropTypes from "prop-types";
import renderer from "react-test-renderer";
import withShowMore from "./with-show-more";

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

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

const MockComponentWrapped = withShowMore(MockComponent);

it(`withShowMore is rendered correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrapped movies={[movie]} limit={1}>
        <React.Fragment />
      </MockComponentWrapped>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
