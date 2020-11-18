import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ResultSuccess} from "./result-success";

configure({adapter: new Adapter()});

it(`Should replay button be pressed`, () => {
  const handleReplayButtonClick = jest.fn();
  const handlrResetGameAction = jest.fn();

  const wrapper = shallow(<ResultSuccess
    questionsCount={3}
    mistakesCount={1}
    onReplayButtonClick={handleReplayButtonClick}
    resetGameAction={handlrResetGameAction}
  />);

  wrapper.find(`.replay`).simulate(`click`);
  expect(handleReplayButtonClick).toHaveBeenCalledTimes(1);
  expect(handlrResetGameAction).toHaveBeenCalledTimes(1);
});
