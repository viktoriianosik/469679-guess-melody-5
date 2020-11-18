import React from "react";
import renderer from "react-test-renderer";
import {Login} from "./login";

const noop = () => {};

it(`Should Login render correctly`, () => {
  const tree = renderer
    .create(<Login
      onSubmit={noop}
      onReplayButtonClick={noop}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
