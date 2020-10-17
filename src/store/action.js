import {isArtistAnswerCorrect, isGenreArtistCorrect} from "../game";
import {GameTypes} from "../const";

export const ActionType = {
  INCREMENT_MISTAKE: `INCREMENT_MISTAKE`,
  INCREMENT_STEP: `INCREMENT_STEP`,
  RESET_GAME: `RESET_GAME`,
};

export const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  }),
  resetGame: () => ({
    type: ActionType.RESET_GAME,
  }),
  incrementMistake: (question, userAnswer) => {
    let answerIsCorrect = false;

    switch (question.type) {
      case GameTypes.GENRE:
        answerIsCorrect = isGenreArtistCorrect(question, userAnswer);
        break;
      case GameTypes.ARTIST:
        answerIsCorrect = isArtistAnswerCorrect(question, userAnswer);
        break;
    }

    return {
      type: ActionType.INCREMENT_MISTAKE,
      payload: answerIsCorrect ? 0 : 1,
    };
  },
};
