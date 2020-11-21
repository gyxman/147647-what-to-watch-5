import {APIRoute, AppRoute, AuthorizationStatus} from "../const";
import {
  authorizedSuccessAction,
  loadMovieByIdAction,
  loadMoviesAction,
  redirectToRouteAction,
  requireAuthorizationAction,
  sendNewCommentAction
} from "./action";

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.MOVIES)
    .then(({data}) => dispatch(loadMoviesAction(data)))
);

export const fetchMovieById = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.MOVIES}/${id}`).then(({data}) => dispatch(loadMovieByIdAction(data)))
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

export const sendNewComment = ({id, rating, comment}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, {rating, comment})
    .then(({data}) => dispatch(sendNewCommentAction(data)))
    .then(() => dispatch(redirectToRouteAction(`${AppRoute.MOVIES}/${id}`)))
);
