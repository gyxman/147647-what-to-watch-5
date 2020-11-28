import React from "react";
import renderer from "react-test-renderer";
import AddReviewForm from "./add-review-form";

const noop = () => {};

it(`AddReviewForm is rendered correctly`, () => {
  const tree = renderer.create(
      <AddReviewForm
        handleAction={noop} handleFieldChange={noop} handleSubmit={noop} isLocked={false} />).toJSON();

  expect(tree).toMatchSnapshot();
});
