import React from "react";
import renderer from "react-test-renderer";
import QuestionGenre from "./question-genre";

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

it(`Should QuestionGenre render correctly`, () => {
  const tree = renderer
    .create((<QuestionGenre
      onAnswer={noop}
      onChange={noop}
      renderPlayer={noop}
      question={question}
      userAnswers={[false, false, false, false]}
    >
      <React.Fragment/>
    </QuestionGenre>), {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
