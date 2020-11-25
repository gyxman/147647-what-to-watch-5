import {APIRoute, AppRoute, AuthorizationStatus} from "../const";
import {
  addErrorAction,
  authorizedSuccessAction, loadCommentsByIdAction, loadFavoriteMoviesAction, loadGenresAction,
  loadMovieByIdAction,
  loadMoviesAction, loadPromoMovieAction,
  redirectToRouteAction,
  requireAuthorizationAction,
} from "./action";

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.MOVIES)
    .then(({data}) => dispatch(loadMoviesAction(data)))
    .then(({payload}) => dispatch(loadGenresAction(payload)))
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_MOVIE)
    .then(({data}) => dispatch(loadPromoMovieAction(data)))
);

export const fetchMovieById = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.MOVIES}/${id}`).then(({data}) => dispatch(loadMovieByIdAction(data)))
);

export const fetchCommentsById = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`).then(({data}) => dispatch(loadCommentsByIdAction(data)))
);

export const fetchFavoriteMovies = () => (dispatch, _getState, api) => (
  api.get(APIRoute.MOVIES)
    .then(({data}) => dispatch(loadFavoriteMoviesAction(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(authorizedSuccessAction(data)))
    .then(() => dispatch(requireAuthorizationAction(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => dispatch(authorizedSuccessAction(data)))
    .then(() => dispatch(requireAuthorizationAction(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRouteAction(AppRoute.ROOT)))
);

export const sendNewComment = (id, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, {rating, comment})
    .then(() => dispatch(redirectToRouteAction(`${AppRoute.MOVIES}/${id}`)))
    .catch(() => dispatch(addErrorAction(`Произошла ошибка, попробуйте позже`)))
);

export const addMovieToFavorite = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${status}`)
    .then(() => dispatch(fetchFavoriteMovies()))
    .then(() => dispatch(fetchPromoMovie()))
    .catch(() => {})
);
