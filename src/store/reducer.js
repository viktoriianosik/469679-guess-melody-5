import {extend} from "../utils";
import {ActionType} from "./action";
import questions from "../mocks/questions";
import {MAX_MISTAKE_COUNT} from "../const";

const initialState = {
  mistake: 0,
  step: 0,
  questions,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_MISTAKE:
      const mistakes = state.mistake + action.payload;
      if (mistakes > MAX_MISTAKE_COUNT) {
        return extend({}, initialState);
      }
      return (
        extend(state, {
          mistake: state.mistake + action.payload,
        })
      );
    case ActionType.INCREMENT_STEP:
      let nextStep = state.step + action.payload;
      return (
        extend(state, {
          step: nextStep,
        })
      );
    case ActionType.RESET_GAME:
      return (
        extend({}, initialState)
      );
  }

  return state;
};

export {reducer};
