import React from "react";
import PropTypes from "prop-types";
import renderer from "react-test-renderer";
import withUserAnswer from "./with-user-answer";

const noop = () => {};

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [{
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `blues`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `jazz`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }],
};

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

const MockComponentWrapped = withUserAnswer(MockComponent);

it(`withUserAnswer render correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      question={question}
      onAnswer={noop}
    >
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
