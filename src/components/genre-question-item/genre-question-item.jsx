import React from "react";
import PropTypes from "prop-types";

const GenreQuestionItem = (props) => {
  const {renderPlayer, id, answer, onChange, userAnswer} = props;

  return (
    <div className="track">
      {renderPlayer(answer.src, id)}
      <div className="game__answer">
        <input className="game__input visually-hidden" type="checkbox" name="answer"
          value={`answer-${id}`}
          id={`answer-${id}`}
          checked={userAnswer}
          onChange={(evt) => {
            const value = evt.target.checked;
            onChange(value, id);
          }}
        />
        <label className="game__check" htmlFor={`answer-${id}`}>Отметить</label>
      </div>
    </div>
  );
};

GenreQuestionItem.propTypes = {
  renderPlayer: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  userAnswer: PropTypes.bool.isRequired,
  answer: PropTypes.shape({
    src: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
};

export default GenreQuestionItem;
