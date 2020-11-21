import {extend, movieMapDtoToLocal} from "../../../utils";
import {ActionType} from "../../action";
import {ALL_GENRES} from "../../../const";

const initialState = {
  activeGenre: ALL_GENRES,
  currentMovie: null,
  commentsForCurrentMovie: [],
  favoriteMovies: []
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
    case ActionType.ADD_MOVIE_TO_FAVORITES:
      return extend(state, {
        favoriteMovies: state.favoriteMovies.push(action.payload),
      });
  }

  return state;
};


export {process};
