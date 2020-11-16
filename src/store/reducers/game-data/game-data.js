import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  movies: [],
};

const gameData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        movies: action.payload,
      });
  }

  return state;
};

export {gameData};
