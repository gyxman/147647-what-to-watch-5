import {extend, movieMapDtoToLocal} from "../../../utils";
import {ActionType} from "../../action";
import {ALL_GENRES} from "../../../const";

const initialState = {
  activeGenre: ALL_GENRES,
  currentMovie: null,
  commentsForCurrentMovie: [],
  favoriteMovies: [],
  error: null,
  currentMovieDuration: 0,
  currentMovieTime: 0,
};

const process = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {activeGenre: action.payload});
    case ActionType.LOAD_MOVIE_BY_ID:
      return extend(state, {
        currentMovie: movieMapDtoToLocal(action.payload),
      });
    case ActionType.LOAD_COMMENTS_BY_ID:
      return extend(state, {
        commentsForCurrentMovie: action.payload,
      });
    case ActionType.ADD_ERROR:
      return extend(state, {error: action.payload});
    case ActionType.REMOVE_ERROR:
      return extend(state, {error: null});
    case ActionType.SET_CURRENT_MOVIE_DURATION:
      return extend(state, {currentMovieDuration: action.payload});
    case ActionType.SET_CURRENT_MOVIE_TIME:
      return extend(state, {currentMovieTime: action.payload});
  }

  return state;
};


export {process};
