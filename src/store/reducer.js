import movies from "../mocks/movies";
import {extend, filterMoviesByGenre} from "../utils";
import {ActionType} from "./action";
import {ALL_GENRES} from "../const";

const initialState = {
  movies,
  genre: ALL_GENRES
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {genre: action.payload});
    case ActionType.GET_MOVIES_BY_GENRE:
      return extend(state, {movies: filterMoviesByGenre(movies, action.payload)});
  }

  return state;
};
