export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_FAVORITE_MOVIES: `LOAD_FAVORITE_MOVIES`,
  LOAD_GENRES: `LOAD_GENRES`,
  LOAD_PROMO_MOVIE: `LOAD_PROMO_MOVIE`,
  LOAD_MOVIE_BY_ID: `LOAD_MOVIE_BY_ID`,
  LOAD_COMMENTS_BY_ID: `LOAD_COMMENTS_BY_ID`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  AUTHORIZED_SUCCESS: `AUTHORIZED_SUCCESS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  ADD_ERROR: `ADD_ERROR`,
  REMOVE_ERROR: `REMOVE_ERROR`,
};

export const loadMoviesAction = (movies) => ({
  type: ActionType.LOAD_MOVIES,
  payload: movies,
});

export const loadFavoriteMoviesAction = (movies) => ({
  type: ActionType.LOAD_FAVORITE_MOVIES,
  payload: movies,
});

export const loadGenresAction = (movies) => ({
  type: ActionType.LOAD_GENRES,
  payload: movies,
});

export const loadPromoMovieAction = (movies) => ({
  type: ActionType.LOAD_PROMO_MOVIE,
  payload: movies,
});

export const loadMovieByIdAction = (movie) => ({
  type: ActionType.LOAD_MOVIE_BY_ID,
  payload: movie,
});

export const loadCommentsByIdAction = (movie) => ({
  type: ActionType.LOAD_COMMENTS_BY_ID,
  payload: movie,
});

export const changeGenreAction = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre
});

export const requireAuthorizationAction = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const authorizedSuccessAction = (user) => ({
  type: ActionType.AUTHORIZED_SUCCESS,
  payload: user,
});

export const redirectToRouteAction = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const addErrorAction = (error) => ({
  type: ActionType.ADD_ERROR,
  payload: error,
});

export const removeErrorAction = () => ({
  type: ActionType.REMOVE_ERROR,
});

