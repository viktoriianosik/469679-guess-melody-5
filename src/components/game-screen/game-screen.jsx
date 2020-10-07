import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import {GameTypes} from "../../const";
import QuestionArtist from "../question-artist/question-artist";
import QuestionGenre from "../question-genre/question-genre";

class GameScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
    };
  }

  render() {
    const {questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step >= questions.length || !question) {
      return (
        <Redirect to="/" />
      );
    }

    switch (question.type) {
      case GameTypes.GENRE:
        return (
          <QuestionGenre
            question = {question}
            onAnswer = {() => {
              this.setState((prevState) => ({
                step: prevState.step + 1,
              }));
            }}
          />
        );
      case GameTypes.ARTIST:
        return (
          <QuestionArtist
            question = {question}
            onAnswer = {() => {
              this.setState((prevState) => ({
                step: prevState.step + 1,
              }));
            }}
          />
        );
    }

    return <Redirect to="/" />;
  }
}

GameScreen.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default GameScreen;
