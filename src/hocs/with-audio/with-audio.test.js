import React from "react";
import PropTypes from "prop-types";
import renderer from "react-test-renderer";
import withAudio from "./with-audio";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withAudio(MockComponent);

it(`withAudio render correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      isPlaying={false}
      src={``}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
