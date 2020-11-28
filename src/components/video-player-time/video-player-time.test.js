import React from "react";
import renderer from "react-test-renderer";
import {VideoPlayerTime} from "./video-player-time";

const noop = () => {};

it(`VideoPlayerTime is rendered correctly`, () => {
  const tree = renderer.create(
      <VideoPlayerTime onLoaded={noop} currentTime={0} duration={1} getVideo={noop} setDuration={noop} setTime={noop} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
