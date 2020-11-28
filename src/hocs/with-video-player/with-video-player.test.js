import React from "react";
import PropTypes from "prop-types";
import renderer from "react-test-renderer";
import withVideoPlayer from "./with-video-player";

const noop = () => {};

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

const MockComponentWrapped = withVideoPlayer(MockComponent);

it(`withVideoPlayer is rendered correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrapped onSubmit={noop}>
        <React.Fragment />
      </MockComponentWrapped>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
