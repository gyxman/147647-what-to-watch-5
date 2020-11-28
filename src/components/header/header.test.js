import React from "react";
import renderer from "react-test-renderer";
import {Header} from "./header";
import {AuthorizationStatus} from "../../const";
import {BrowserRouter} from "react-router-dom";

it(`Header is rendered correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <Header authorizationStatus={AuthorizationStatus.AUTH} />
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
