import {APIRoute, AppRoute, AuthorizationStatus} from "../const";
import {loadMovieByIdAction, loadMoviesAction, redirectToRoute, requireAuthorization} from "./action";

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.MOVIES)
    .then(({data}) => dispatch(loadMoviesAction(data)))
);

export const fetchMovieById = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.MOVIES}/${id}`).then(({data}) => dispatch(loadMovieByIdAction(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);
