import React from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import {GameTypes, MAX_MISTAKE_COUNT} from "../../const";
import {ActionCreator} from "../../store/action";
import QuestionArtist from "../question-artist/question-artist";
import QuestionGenre from "../question-genre/question-genre";
import Mistakes from "../mistakes/mistakes";
import withAudioPlayer from "../../hocs/with-audio-player/with-audio-player";
import withUserAnswer from "../../hocs/with-user-answer/with-user-anser";
import {connect} from "react-redux";
import artistQuestionProp from "../question-artist/question-artist.prop";
import genreQuestionProp from "../question-genre/question-genre-prop";

const QuestionArtistWrapper = withAudioPlayer(QuestionArtist);
const QuestionGenreWrapper = withAudioPlayer(withUserAnswer(QuestionGenre));

const GameScreen = (props) => {
  const {
    questions,
    step,
    onUserAnswer,
    mistakes,
  } = props;
  const question = questions[step];

  if (mistakes >= MAX_MISTAKE_COUNT) {
    return (
      <Redirect to="/lose" />
    );
  }

  if (step > questions.length || !question) {
    return (
      <Redirect to="/result" />
    );
  }

  switch (question.type) {
    case GameTypes.GENRE:
      return (
        <QuestionGenreWrapper
          question = {question}
          onAnswer = {onUserAnswer}
        >
          <Mistakes count={mistakes} />
        </QuestionGenreWrapper>
      );
    case GameTypes.ARTIST:
      return (
        <QuestionArtistWrapper
          question = {question}
          onAnswer = {onUserAnswer}
        >
          <Mistakes count={mistakes} />
        </QuestionArtistWrapper>
      );
  }

  return <Redirect to="/" />;
};

GameScreen.propTypes = {
  step: PropTypes.number.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(
      PropTypes.oneOfType([artistQuestionProp, genreQuestionProp]).isRequired
  ),
};

const mapStateToProps = (state) => ({
  step: state.step,
  mistakes: state.mistake,
  questions: state.questions,
});

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(ActionCreator.resetGame());
  },
  onUserAnswer(question, userAnswer) {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(question, userAnswer));
  }
});

export {GameScreen};
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
