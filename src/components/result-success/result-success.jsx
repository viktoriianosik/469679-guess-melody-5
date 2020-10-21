import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import PropTypes from "prop-types";

const ResultSuccess = (props) => {
  const {questionsCount, mistakesCount, onReplayButtonClick, resetGame} = props;
  const correctlyQuestionsCount = questionsCount - mistakesCount;

  return (
    <section className="result">
      <div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" /></div>
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">Вы ответили правильно на {correctlyQuestionsCount} вопросов и совершили {mistakesCount} ошибки</p>
      <button
        className="replay"
        type="button"
        onClick = {() => {
          resetGame();
          onReplayButtonClick();
        }}
      >
        Сыграть ещё раз
      </button>
    </section>
  );
};

ResultSuccess.propTypes = {
  questionsCount: PropTypes.number.isRequired,
  mistakesCount: PropTypes.number.isRequired,
  onReplayButtonClick: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  questionsCount: state.step,
  mistakesCount: state.mistake,
});

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(ActionCreator.resetGame());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultSuccess);
