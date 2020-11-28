import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

it(`App is rendered correctly`, () => {
  const tree = renderer.create(
      <App />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
