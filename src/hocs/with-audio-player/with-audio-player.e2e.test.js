import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withAudioPlayer from "./with-audio-player";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapper = withAudioPlayer(MockComponent);

it(`Should activePlayerId eq 0`, () => {
  const wrapper = shallow(<MockComponentWrapper />);
  expect(wrapper.state().activePlayerId).toEqual(0);
});
