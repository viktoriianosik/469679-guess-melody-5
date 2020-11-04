import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  mistake: 0,
  step: 0,
};

const gameProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_MISTAKE:
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

export {gameProcess};
