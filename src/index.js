import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./store/reducers/root-reducer";
import {createAPI} from "./services/api";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {checkAuth, fetchMoviesList, fetchPromoMovie} from "./store/api-actions";
import {requireAuthorizationAction} from "./store/action";
import {AuthorizationStatus} from "./const";
import {redirect} from "./store/middlewares/redirect";

const api = createAPI(
    () => store.dispatch(requireAuthorizationAction(AuthorizationStatus.NO_AUTH))
);


const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

Promise.all([
  store.dispatch(fetchMoviesList()),
  store.dispatch(fetchPromoMovie()),
  store.dispatch(checkAuth()),
])
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.querySelector(`#root`)
    );
  });

