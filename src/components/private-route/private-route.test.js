import React from "react";
import renderer from "react-test-renderer";
import {PrivateRoute} from "./private-route";
import {AuthorizationStatus} from "../../const";
import {BrowserRouter} from "react-router-dom";

const noop = () => {};

it(`PrivateRoute is rendered correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <PrivateRoute authorizationStatus={AuthorizationStatus.NO_AUTH} render={noop} exact={false} path={``} />
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
