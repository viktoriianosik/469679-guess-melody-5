import React from "react";
import PropTypes from "prop-types";
import renderer from "react-test-renderer";
import withAudioPlayer from "./with-audio-player";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withAudioPlayer(MockComponent);

it(`withAudioPlayer render correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped>
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
