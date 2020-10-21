import React from "react";
import PropTypes from "prop-types";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";

const Lose = ({resetGame, onReplayButtonClick}) => {
  return (
    <section className="result">
      <div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" /></div>
      <h2 className="result__title">Какая жалость!</h2>
      <p className="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
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

Lose.propTypes = {
  resetGame: PropTypes.func.isRequired,
  onReplayButtonClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(ActionCreator.resetGame());
  }
});

export default connect(null, mapDispatchToProps)(Lose);
