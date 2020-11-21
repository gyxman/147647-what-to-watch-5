import {extend, getGenres, movieMapDtoToLocal} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  movies: [],
  genres: [],
  promoMovie: null,
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        movies: action.payload.map(movieMapDtoToLocal),
      });
    case ActionType.LOAD_GENRES:
      return extend(state, {
        genres: getGenres(action.payload),
      });
    case ActionType.LOAD_PROMO_MOVIE:
      return extend(state, {
        promoMovie: movieMapDtoToLocal(action.payload)
      });
  }

  return state;
};

export {data};
