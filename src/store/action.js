import {isArtistAnswerCorrect, isGenreArtistCorrect} from "../game";
import {GameTypes} from "../const";

export const ActionType = {
  INCREMENT_MISTAKE: `INCREMENT_MISTAKE`,
  INCREMENT_STEP: `INCREMENT_STEP`,
  RESET_GAME: `RESET_GAME`,
  LOAD_QUESTIONS: `LOAD_QUESTIONS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};

export const incrementStep = () => ({
  type: ActionType.INCREMENT_STEP,
  payload: 1,
});

export const resetGame = () => ({
  type: ActionType.RESET_GAME,
});

export const incrementMistake = (question, userAnswer) => {
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
};

export const loadQuestions = (questions) => ({
  type: ActionType.LOAD_QUESTIONS,
  payload: questions,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
