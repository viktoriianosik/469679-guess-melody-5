import React from "react";
import {Lose} from "./lose";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

it(`Should replay button be pressed`, () => {
  const handleReplayButtonClick = jest.fn();
  const handleResetGameAction = jest.fn();
  const wrapper = shallow(<Lose
    onReplayButtonClick={handleReplayButtonClick}
    resetGameAction={handleResetGameAction}
  />);

  wrapper.find(`.replay`).simulate(`click`);
  expect(handleReplayButtonClick).toHaveBeenCalledTimes(1);
  expect(handleResetGameAction).toHaveBeenCalledTimes(1);
});
