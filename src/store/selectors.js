import {createSelector} from 'reselect';
import {ALL_GENRES} from "../const";

const getMovies = ({DATA}) => DATA.movies;
const getGenre = ({PROCESS}) => PROCESS.activeGenre;

export const getMoviesByActiveGenre = createSelector(
    [getMovies, getGenre],
    (movies, genre) => {

      if (genre === ALL_GENRES) {
        return movies;
      }

      return movies.filter((movie) => movie.genre === genre);
    }
);
