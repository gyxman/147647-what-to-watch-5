import {ALL_GENRES} from "./const";

export const filterMoviesByGenre = (movies, genre) => {
  if (genre === ALL_GENRES) {
    return movies;
  }

  return movies.filter((movie) => movie.genre === genre);
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
