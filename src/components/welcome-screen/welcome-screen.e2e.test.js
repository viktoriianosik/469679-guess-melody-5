import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";

configure({adapter: new Adapter()});

it(`Should play button be pressed`, () => {
  const handlePlayButtonClick = jest.fn();

  const wrapper = shallow(<WelcomeScreen
    errorsCount={3}
    onPlayButtonClick={handlePlayButtonClick}
  />);

  wrapper.find(`.welcome__button`).simulate(`click`);
  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
});
