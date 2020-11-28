import React from "react";
import renderer from "react-test-renderer";
import {GenresList} from "./genres-list";

const noop = () => {};

it(`GenresList is rendered correctly`, () => {
  const tree = renderer.create(
      <GenresList activeGenre={`all`} changeGenre={noop} genres={[`drama`, `comedy`]} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
