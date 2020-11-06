import React from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import {GameTypes, MAX_MISTAKE_COUNT, AppRoute} from "../../const";
import {incrementStep, incrementMistake, resetGame} from "../../store/action";
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
      <Redirect to={AppRoute.LOSE} />
    );
  }

  if (step > questions.length || !question) {
    return (
      <Redirect to={AppRoute.RESULT} />
    );
  }

  switch (question.type) {
    case GameTypes.GENRE:
      return (
        <QuestionGenreWrapper
          key={step}
          question = {question}
          onAnswer = {onUserAnswer}
        >
          <Mistakes count={mistakes} />
        </QuestionGenreWrapper>
      );
    case GameTypes.ARTIST:
      return (
        <QuestionArtistWrapper
          key={step}
          question = {question}
          onAnswer = {onUserAnswer}
        >
          <Mistakes count={mistakes} />
        </QuestionArtistWrapper>
      );
  }

  return <Redirect to={AppRoute.ROOT} />;
};

GameScreen.propTypes = {
  step: PropTypes.number.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(
      PropTypes.oneOfType([artistQuestionProp, genreQuestionProp]).isRequired
  ),
};

const mapStateToProps = ({GAME, DATA}) => ({
  step: GAME.step,
  mistakes: GAME.mistake,
  questions: DATA.questions,
});

const mapDispatchToProps = (dispatch) => ({
  resetGameAction() {
    dispatch(resetGame());
  },
  onUserAnswer(question, userAnswer) {
    dispatch(incrementStep());
    dispatch(incrementMistake(question, userAnswer));
  }
});

export {GameScreen};
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
