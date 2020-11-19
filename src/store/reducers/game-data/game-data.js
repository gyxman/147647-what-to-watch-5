import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  movies: [],
  currentMovie: null,
  commentsForCurrentMovie: []
};

const gameData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        movies: action.payload,
      });
    case ActionType.LOAD_MOVIE_BY_ID:
      return extend(state, {
        currentMovie: action.payload,
      });
  }

  return state;
};

export {gameData};
