import React from "react";
import renderer from "react-test-renderer";
import Player from "./player";

it(`Player is rendered correctly`, () => {
  const tree = renderer.create(
      <Player />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
