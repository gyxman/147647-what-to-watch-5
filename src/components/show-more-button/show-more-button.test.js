import React from "react";
import renderer from "react-test-renderer";
import ShowMoreButton from "./show-more-button";

const noop = () => {};

it(`ShowMoreButton is rendered correctly`, () => {
  const tree = renderer.create(
      <ShowMoreButton onClick={noop} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
