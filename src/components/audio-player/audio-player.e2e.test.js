import React from "react";
import Adapter from "enzyme-adapter-react-16";
import AudioPlayer from "./audio-player";
import {configure, shallow} from "enzyme";

configure({adapter: new Adapter()});

it(`Click by Play button calls callback`, () => {
  const handlePlayButtonClick = jest.fn();
  const wrapper = shallow(<AudioPlayer
    isLoading={false}
    isPlaying={false}
    onPlayButtonClick={handlePlayButtonClick}
  >
    <audio />
  </AudioPlayer>);

  wrapper.find(`.track__button`).simulate(`click`);
  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
});
