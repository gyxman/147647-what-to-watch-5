export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_MOVIE_BY_ID: `LOAD_MOVIE_BY_ID`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  AUTHORIZED_SUCCESS: `AUTHORIZED_SUCCESS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SEND_NEW_COMMENT: `SEND_NEW_COMMENT`,
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

export const sendNewCommentAction = (comments) => ({
  type: ActionType.SEND_NEW_COMMENT,
  payload: comments,
});

