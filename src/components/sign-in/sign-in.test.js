import React from "react";
import renderer from "react-test-renderer";
import {SignIn} from "./sign-in";

const noop = () => {};

it(`SignIn is rendered correctly`, () => {
  const tree = renderer.create(
      <SignIn onSubmit={noop} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
