export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_MOVIE_BY_ID: `LOAD_MOVIE_BY_ID`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};

export const loadMoviesAction = (movies) => ({
  type: ActionType.LOAD_MOVIES,
  payload: movies,
});

export const loadMovieByIdAction = (movie) => ({
  type: ActionType.LOAD_MOVIE_BY_ID,
  payload: movie,
});

export const changeGenreAction = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

