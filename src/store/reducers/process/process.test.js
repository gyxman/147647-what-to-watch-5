import {process} from "./process";
import {ALL_GENRES} from "../../../const";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(process(void 0, {})).toEqual({
    activeGenre: ALL_GENRES,
    currentMovie: null,
    commentsForCurrentMovie: [],
    favoriteMovies: [],
    error: null,
    currentMovieDuration: 0,
    currentMovieTime: 0,
  });
});
