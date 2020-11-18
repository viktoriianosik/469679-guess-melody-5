import React from "react";
import {Login} from "./login";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

const noop = () => {};

it(`Should replay button be pressed`, () => {
  const handleReplayButtonClick = jest.fn();
  const wrapper = shallow(<Login
    onReplayButtonClick={handleReplayButtonClick}
    onSubmit={noop}
  />);

  wrapper.find(`.replay`).simulate(`click`);
  expect(handleReplayButtonClick).toHaveBeenCalledTimes(1);
});
