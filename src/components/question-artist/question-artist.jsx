import React from "react";
import PropTypes from "prop-types";
import questionArtistProp from "./question-artist.prop";

const QuestionArtist = (props) => {
  const {onAnswer, question, renderPlayer, children} = props;
  const {song, answers} = question;

  return (
    <section className="game game--artist">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}/>
        </svg>

        {children}
      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            {renderPlayer(song.src, 0)}
          </div>
        </div>

        <form className="game__artist">
          {answers.map((answer, i) => (
            <div key={answer.artist} className="artist">
              <input className="artist__input visually-hidden" type="radio" name="answer"
                value={`artist-${i}`}
                id={`artist-${i}`}
                onChange={(evt) => {
                  evt.preventDefault();
                  onAnswer(question, answer);
                }}
              />
              <label className="artist__name" htmlFor={`artist-${i}`}>
                <img className="artist__picture" src={answer.picture} alt={answer.artist} />
                {answer.artist}
              </label>
            </div>
          ))}
        </form>
      </section>
    </section>
  );
};

QuestionArtist.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: questionArtistProp,
  renderPlayer: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default QuestionArtist;
