import React from "react";
import renderer from "react-test-renderer";
import {Lose} from "./lose";

const noop = () => {};

it(`Should Lose render correctly`, () => {
  const tree = renderer
    .create(<Lose
      resetGameAction={noop}
      onReplayButtonClick={noop}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
