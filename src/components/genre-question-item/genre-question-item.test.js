import React from "react";
import renderer from "react-test-renderer";
import GenreQuestionItem from "./genre-question-item";

const noop = () => {};

const answer = {
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  genre: `rock`,
};

it(`Should GenreQuestionItem render correctly`, () => {
  const tree = renderer
    .create(<GenreQuestionItem
      renderPlayer={noop}
      id={0}
      onChange={noop}
      answer={answer}
      userAnswer={false}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
